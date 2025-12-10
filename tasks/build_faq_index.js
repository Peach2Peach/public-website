// tasks/generate_faq_index.js
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const CONTENT_DIR = path.join(__dirname, '..', 'content');
const OUTPUT = path.join(__dirname, '..', 'static', 'faq-index.json'); // served as /faq-index.json

// Labels for sections (shown in search results)
const SECTION_LABELS = {
  trading: 'Trading',
  matches: 'Marketplace',
  'escrow-release': 'Escrow release',
  account: 'Account',
  pm: 'Payment methods',
  privacy: 'Privacy',
};

function slugify(str) {
  return str
    .toLowerCase()
    .normalize('NFD')                 // split accents
    .replace(/[\u0300-\u036f]/g, '')  // remove accents
    .replace(/[^a-z0-9]+/g, '-')      // non-alphanum -> dash
    .replace(/^-+|-+$/g, '');         // trim dashes
}

function createSnippet(text) {
  return text
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 160);
}

function parseFaqFile(filePath) {
  // Example path: /content/default/faq/account.md
  const parts = filePath.split(path.sep);

  const fileName = path.basename(filePath);       // account.md
  const sectionKey = fileName.replace(/\.md$/, ''); // account

  const langDir = parts[parts.indexOf('content') + 1]; // default, de, it, es, ...
  const lang = langDir === 'default' ? 'en' : langDir;

  // Base URL of the section
  const baseUrl =
    lang === 'en'
      ? `/faq/${sectionKey}/`
      : `/${lang}/faq/${sectionKey}/`;

  const sectionLabel = SECTION_LABELS[sectionKey] || sectionKey;

  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  const entries = [];
  let currentQuestion = null;
  let currentAnswerLines = [];

  const flush = () => {
    if (!currentQuestion) return;

    const answer = currentAnswerLines.join('\n').trim();
    const anchor = slugify(currentQuestion); // match your existing anchors
    const urlWithAnchor = `${baseUrl}#${anchor}`;

    entries.push({
      section: sectionLabel,
      sectionKey,
      question: currentQuestion.trim(),
      answer,
      snippet: createSnippet(answer),
      url: urlWithAnchor,
      lang,
    });

    currentQuestion = null;
    currentAnswerLines = [];
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Start of new question: :::details Question text
    const m = line.match(/^:::details\s+(.+)$/);
    if (m) {
      flush(); // close previous if any
      currentQuestion = m[1];
      continue;
    }

    // End of details block
    if (line.startsWith(':::') && !line.startsWith(':::details')) {
      flush();
      continue;
    }

    if (currentQuestion) {
      currentAnswerLines.push(line);
    }
  }

  flush(); // last one

  return entries;
}

function buildIndex() {
  // /content/*/faq/*.md
  const files = glob.sync(path.join(CONTENT_DIR, '*/faq/*.md'));
  let index = [];

  files.forEach((file) => {
    index = index.concat(parseFaqFile(file));
  });

  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, JSON.stringify(index, null, 2), 'utf8');

  console.log(`FAQ index written to ${OUTPUT} with ${index.length} entries.`);
}

buildIndex();
