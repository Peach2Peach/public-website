/* tasks/build_blog_index.js */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const CONTENT_GLOB = 'content/**/blog/**/*.md';
const OUTPUT_DIR = path.join(__dirname, '..', 'dist', 'blog');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'search-index.json');

function getLangFromPath(filePath) {
  // content/default/blog/...  => en
  // content/de/default/blog/... => de
  // content/es/default/blog/... => es, etc.
  const parts = filePath.split(path.sep);
  const contentIndex = parts.indexOf('content');
  if (contentIndex === -1) return 'en';

  const maybeLang = parts[contentIndex + 1];
  if (!maybeLang || maybeLang === 'default') {
    return 'en';
  }

  return maybeLang;
}

function getSlugFromPath(filePath) {
  // blog/peach-under-the-hood.md       => peach-under-the-hood
  // blog/peach-under-the-hood/index.md => peach-under-the-hood
  const parsed = path.parse(filePath);
  if (parsed.name.toLowerCase() === 'index') {
    return path.basename(parsed.dir);
  }
  return parsed.name;
}

function stripFrontMatter(raw) {
  if (raw.startsWith('---')) {
    const end = raw.indexOf('\n---', 3);
    if (end !== -1) {
      return raw.slice(end + 4); // skip \n---
    }
  }
  return raw;
}

function extractFrontMatter(raw) {
  // Very small YAML-ish parser, enough for simple key: value frontmatter
  const result = {};
  if (!raw.startsWith('---')) return { attributes: result, body: raw };

  const end = raw.indexOf('\n---', 3);
  if (end === -1) return { attributes: result, body: raw };

  const header = raw.slice(3, end).trim(); // between the --- lines
  const body = raw.slice(end + 4); // skip \n---

  header.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;

    const colonIndex = trimmed.indexOf(':');
    if (colonIndex === -1) return;

    const key = trimmed.slice(0, colonIndex).trim();
    let value = trimmed.slice(colonIndex + 1).trim();

    // strip quotes
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    // simple array syntax: [tag1, tag2]
    if (value.startsWith('[') && value.endsWith(']')) {
      const inner = value.slice(1, -1).trim();
      if (!inner) {
        value = [];
      } else {
        value = inner.split(',').map(v => v.trim().replace(/^['"]|['"]$/g, ''));
      }
    }

    result[key] = value;
  });

  return { attributes: result, body };
}

function stripMarkdown(md) {
  if (!md) return '';

  return md
    // remove code blocks
    .replace(/```[\s\S]*?```/g, '')
    // remove inline code
    .replace(/`([^`]+)`/g, '$1')
    // remove images ![alt](url)
    .replace(/!\[[^\]]*]\([^)]*\)/g, '')
    // remove links [text](url)
    .replace(/\[([^\]]+)]\([^)]*\)/g, '$1')
    // remove headings, emphasis, etc.
    .replace(/(^|\n)#+\s+/g, '$1')
    .replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, '$1')
    // blockquotes
    .replace(/^\s*>+\s?/gm, '')
    // lists
    .replace(/^\s*[-+*]\s+/gm, '')
    .replace(/^\s*\d+\.\s+/gm, '')
    // collapse whitespace
    .replace(/\r/g, '')
    .replace(/\n{2,}/g, '\n\n')
    .trim();
}

function getExcerpt(text, maxLength = 220) {
  if (!text) return '';
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= maxLength) return clean;
  return clean.slice(0, maxLength).replace(/\s+\S*$/, '') + '…';
}

function buildIndex() {
  console.log('[blog-index] Building blog search index…');

  const files = glob.sync(CONTENT_GLOB, {
    nodir: true
  });

  const posts = files.map(filePath => {
    const raw = fs.readFileSync(filePath, 'utf8');
    const { attributes, body } = extractFrontMatter(raw);

    const lang = attributes.lang || getLangFromPath(filePath);
    const slug = attributes.slug || getSlugFromPath(filePath);
    const title = attributes.title || slug.replace(/-/g, ' ');
    const date = attributes.date || null;
    const tags = attributes.tags || [];
    const description = attributes.description || attributes.excerpt || '';

    const plainBody = stripMarkdown(body);
    const excerpt = getExcerpt(description || plainBody);

    return {
      title,
      slug,
      lang,
      date,
      tags,
      excerpt,
      content: plainBody
    };
  });

  // Optional: sort by date desc if dates exist
  posts.sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date) - new Date(a.date);
  });

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2), 'utf8');

  console.log(`[blog-index] Wrote ${posts.length} posts to ${OUTPUT_FILE}`);
}

buildIndex();
