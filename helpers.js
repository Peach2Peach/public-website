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
const slugify = str => str.toLowerCase().trim()
  .replace(/[^\w\s-]/g, '')
  .replace(/[\s_-]+/g, '-')
  .replace(/^-+|-+$/g, '')

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

// variables
const getVar = path => {
  let vars
  try { vars = require('./content/meta.json') } catch (error) {}
  return vars && vars[path]
}
const variable = name => getVar(name) || name

// configure markdown-it
const transformer = require('jstransformer')
const { _tr: mdTransformer } = transformer(require('jstransformer-markdown-it'))

const ICON_REGEX = /:([\w-_]+):/gi
const VARIABLE_REGEX = /\$([\w-_]+)\$/gi

// configure replacements
const replace = require('markdown-it-replace-it')
replace.replacements.push({
  name: 'icons',
  re: ICON_REGEX,
  html: true,
  sub (str) {
    const i = str.replace(/:/g, '')
    return `<svg role="img"><use href="${assetPath('/img/icons.svg')}#${i}"></use></svg>`
  }
})

replace.replacements.push({
  name: 'variables',
  re: VARIABLE_REGEX,
  html: true,
  sub (str) {
    const v = str.replace(/\$/g, '')
    return variable(v)
  }
})

// toc and anchors
const markdownItTocAndAnchor = require('markdown-it-toc-and-anchor').default

const config = {
  html: true,
  typographer: true,
  plugins: [
    ['markdown-it-implicit-figures', { figcaption: true }],
    [markdownItTocAndAnchor, { slugify, anchorLink: false, tocFirstLevel: 2, tocLastLevel: 2 }],
    ['markdown-it-container', 'note'],
    ['markdown-it-container', 'buttons'],
    ['markdown-it-container', 'figures'],
    ['markdown-it-container', 'details', {
      validate (params) {
        return params.trim().match(/^details\s+(.*)$/)
      },
      render (tokens, idx) {
        const { info, nesting } = tokens[idx]
        const isOpening = nesting === 1
        const [, summary] = info.trim().match(/^details\s+(.*)$/) || []
        return isOpening
          ? `<details id="${slugify(summary)}"><summary><span class="title">${summary}</span><span class="marker"></span></summary><article>\n`
          : '</article></details>\n'
      }
    }],
    'markdown-it-replace-link',
    replace
  ],
  replaceLink (link) {
    const match = link.match(VARIABLE_REGEX)
    if (match) {
      const name = match[0].replace(/\$/g, '')
      const v = variable(name)
      return v ? link.replace(match[0], v) : link
    }
    return assetPath(link)
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
  linkTarget,
  assetUrl,
  assetPath,
  getRev,
  getVar
}
