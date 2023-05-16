const { readFileSync } = require('fs')
const matter = require('gray-matter')
const { renderMarkdown } = require('../../helpers')

const toDate = date => (new Date(date)).toJSON().split('T')[0]

const extractTitle = text => {
  if (!text) return
  return (text.match(/# (.*)/) || [])[1]
}

const extractDescription = text => {
  if (!text) return
  const paragraph = text.match(/^[A-Za-z].*(?:\n[A-Za-z].*)*/m)
  return paragraph ? paragraph.toString().replace(/[\*\_]]/g, '').replace(/\[(.*?)\]\(.*?\)/g, '$1') : null
}

const getMarkdown = filepath => {
  const contents = readFileSync(filepath)
  const { content, data } = matter(contents)
  let html = content ? renderMarkdown(content) : null
  if (html && html.match(/<!--\[/)) {
    html = Array.from(html.matchAll(/<!--\[(.*?)\]-->(.*?)(?=<!--|$)/gs))
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

module.exports = {
  toDate,
  getMarkdown,
}