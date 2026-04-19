const { readFileSync } = require('fs')
const matter = require('gray-matter')
const { renderMarkdown } = require('../../helpers')

const toDate = date => new Date(date).toJSON().split('T')[0]

const extractTitle = text => {
  if (!text) return
  return (text.match(/^# (.*)$/m) || [])[1]
}

const extractDescription = text => {
  if (!text) return
  const stripped = text.replace(/<!--\[.*?\]-->/g, '').replace(/<[^>]+>/g, '')
  const paragraph = stripped.match(/^[A-Za-z].*(?:\n[A-Za-z].*)*/m)
  return paragraph
    ? paragraph
        .toString()
        .replace(/\*\*(.+?)\*\*/g, '$1')
        .replace(/\*(.+?)\*/g, '$1')
        .replace(/_(.+?)_/g, '$1')
        .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    : null
}

const getMarkdown = filepath => {
  const contents = readFileSync(filepath)
  const { content, data } = matter(contents)
  let html = content ? renderMarkdown(content) : null
  if (html && html.match(/<!--\[/)) {
    html = Array.from(
      html.matchAll(/<!--\[(.*?)\]-->(.*?)(?=<!--|$)/gs),
    ).reduce(
      (res, match) => Object.assign(res, { [match[1]]: match[2].trim() }),
      {},
    )
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
