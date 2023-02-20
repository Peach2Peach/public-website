const { readFileSync, writeFileSync } = require('fs')
const { join, relative, resolve } = require('path')
const glob = require('glob')
const matter = require('gray-matter')
const { slugify, renderMarkdown } = require('../helpers')
const meta = require('../content/meta.json')
const meetups = require('../content/peach-meetups.json')

const dir = resolve(__dirname, '..')
const dst = join(dir, 'site-data.json')

const toDate = date => (new Date(date)).toJSON().split('T')[0]

const getMarkdown = filepath => {
  const contents = readFileSync(filepath)
  const { content, data } = matter(contents)
  let html = content ? renderMarkdown(content) : null
  if (html && html.match(/<!--/)) {
    html = Array.from(html.matchAll(/<!--\s*(.*?)\s*-->(.*?)(?=<!--|$)/gs))
      .reduce((res, match) =>
        Object.assign(res, { [match[1]]: match[2].trim() }),
        {})
  }
  if (!data.title) data.title = extractTitle(content)
  if (!data.description) data.description = extractDescription(content)
  data.content = content
  data.html = html
  return data
}

const extractTitle = text => {
  if (!text) return
  return (text.match(/# (.*)/) || [])[1]
}

const extractDescription = text => {
  if (!text) return
  const paragraph = text.match(/^[A-Za-z].*(?:\n[A-Za-z].*)*/m)
  return paragraph ? paragraph.toString().replace(/[\*\_]]/g, '').replace(/\[(.*?)\]\(.*?\)/g, '$1') : null
}

const pages = glob.sync(join(dir, 'content', '**', '*.md')).map(filePath => {
  const data = getMarkdown(filePath)
  data.permalink = relative(join(dir, 'content'), filePath).replace('.md', '')
  return data
})

const posts = glob.sync(join(dir, 'blog', '**', '*.md')).map(filePath => {
  const data = getMarkdown(filePath)
  const [, date, name] = filePath.match(/(\d{4}-\d{2}-\d{2})-(.*)\./)
  data.date = toDate(date)
  data.name = name
  data.permalink = `blog/${data.name}`
  return data
}).reverse()

// blog with tags
const blogPage = pages.find(p => p.id === 'blog')
const tags = Object.values(posts.reduce((res, post) => {
  if (post.tags) {
    post.tags.forEach(tag => {
      const slug = slugify(tag)
      const permalink = `blog/tag/${slug}`
      const name = `tag-${slug}`
      res[slug] = res[slug] || Object.assign({}, blogPage, { permalink, tag, name, posts: [] })
      res[slug].posts.push(post)
    })
  }
  return res
}, {}))

// site data
const data = {
  meta,
  meetups,
  pages,
  posts,
  tags
}
const json = JSON.stringify(data, null, 2)

writeFileSync(dst, json)
