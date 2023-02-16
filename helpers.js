const IS_DEV = process.env.NODE_ENV === 'development'
const HOST = IS_DEV ? 'http://localhost:3000' : getBaseUrl()

function getBaseUrl () {
  const { DEPLOY_PRIME_URL, URL } = process.env
  const branchUrl = DEPLOY_PRIME_URL || URL || ''
  return !branchUrl.match('master--') ? branchUrl : 'https://peachbitcoin.com'
}

// replacements
const stripHTML = str => {
  return str && encode(decode(str.replace(/(<([^>]+)>)/ig, '').trim().replace(/\n\s*/g, '\n')), { level: 'xml' })
}

// slug
const slugify = str => str.toLowerCase()
  .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
  .replace(/\//g, '-')
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
  try { revs = require('./rev-manifest.json') } catch (error) {}
  return revs && revs[path]
}
const assetPath = path => getRev(path) || path
const assetUrl = (path, protocol = 'https') => {
  if (IS_DEV && !path.startsWith('http')) protocol = 'http'
  const base = path.startsWith('http') ? '' : HOST
  let url = `${base}${assetPath(path)}`
  if (!url.startsWith(`${protocol}:`)) url = url.replace(/^.*:/, `${protocol}:`)
  return url
}

const random = max =>  Math.floor(Math.random() * Math.floor(max))

// configure markdown-it
const transformer = require('jstransformer')
const { _tr: mdTransformer } = transformer(require('jstransformer-markdown-it'))

// configure replacements
const replace = require('markdown-it-replace-it')
replace.replacements.push({
  name: 'icons',
  re: /:([\w-_]+?):/gi,
  html: true,
  sub (str) {
    const i = str.replace(/:/g, '')
    return `<svg role="img"><use href="${assetPath('/img/icons.svg')}#${i}"></use></svg>`
  }
})

const config = {
  html: true,
  typographer: true,
  plugins: [
    ['markdown-it-container', 'note'],
    ['markdown-it-anchor', { slugify, permalink: false }],
    ['markdown-it-toc-done-right', { slugify, level: 2, listType: 'ul' }],
    ['markdown-it-implicit-figures', { figcaption: true }],,
    'markdown-it-replace-link',
    replace
  ],
  replaceLink: assetPath
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
