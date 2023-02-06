const { readFileSync, writeFileSync } = require('fs')
const { join, relative, resolve } = require('path')
const glob = require('glob')
const matter = require('gray-matter')
const { renderMarkdown } = require('../helpers')
const meta = require('../content/meta.json')
const meetups = require('../content/peach-meetups.json')

const dir = resolve(__dirname, '..')
const dst = join(dir, 'site-data.json')

const toDate = date => (new Date(date)).toJSON().split('T')[0]

const getMarkdown = filepath => {
  const contents = readFileSync(filepath)
  const { content, data } = matter(contents)
  data.content = content
  data.html = content ? renderMarkdown(content) : null
  if (!data.title) data.title = extractTitle(content)
  if (!data.description) data.description = extractDescription(content)
  return data
}

const extractTitle = text => {
  if (!text) return
  return (text.match(/^# (.*)/) || [])[1]
}

const extractDescription = text => {
  if (!text) return
  const paragraph = text.match(/^[A-Za-z].*(?:\n[A-Za-z].*)*/m)
  return paragraph ? paragraph.toString().replace(/[\*\_]]/g, '').replace(/\[(.*?)\]\(.*?\)/g, '$1') : null
}

const pages = glob.sync(join(dir, 'content', '**', '*.md')).map(filePath => {
  const data = getMarkdown(filePath)
  const id = relative(join(dir, 'content'), filePath).replace('.md', '')
  data.id = data.permalink = id
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

const data = {
  meta,
  pages,
  posts,
  meetups
}
const json = JSON.stringify(data, null, 2)

writeFileSync(dst, json)
