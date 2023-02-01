// replacements
const stripHTML = str => {
  return str && encode(decode(str.replace(/(<([^>]+)>)/ig, '').trim().replace(/\n\s*/g, '\n')), { level: 'xml' })
}

// slug
const slugify = str => str.toLowerCase()
  .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
  .replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')
  .replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, '')

const truncate = (str, wordCount) => {
  const words = str.trim().split(/\s(?![^\[]*\])/g)
  const head = words.splice(0, wordCount).join(' ')
  const tail = words.join(' ')
  return [head, tail]
}
// links
const linkTarget = url => url.startsWith('http') ? '_blank' : null
const getRev = path => {
  let revs
  try { revs = require('./rev-manifest.json') } catch (error) { console.error('no revs')}
  return revs && revs[path]
}
const assetPath = path => getRev(path) || path
const assetUrl = (path, protocol = 'https') => {
  return `${protocol}://peachbitcoin.com${assetPath(path)}`
}

const random = max =>  Math.floor(Math.random() * Math.floor(max))

// configure markdown-it
const transformer = require('jstransformer')
const { _tr: mdTransformer } = transformer(require('jstransformer-markdown-it'))

const config = {
  html: true,
  typographer: true,
  plugins: [
    'markdown-it-replace-link'
  ],
  replaceLink(link) {
    return getRev(link) || link
  }
}

// monkey-patch render function to pass custom options
const { render: renderMd } = mdTransformer

mdTransformer.render = str => renderMd(str, config)

module.exports = {
  renderMarkdown: mdTransformer.render,
  slugify,
  stripHTML,
  truncate,
  random,
  linkTarget,
  assetUrl,
  assetPath,
  getRev
}
