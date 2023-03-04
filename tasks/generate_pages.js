const pug = require('pug')
const { mkdirSync, readFileSync, writeFileSync } = require('fs')
const { dirname, resolve } = require('path')
const config = require('../pug.config')

const { posts, pages, tags } = JSON.parse(readFileSync(resolve(__dirname, '..', 'site-data.json')))

const renderPage = (template, id, data = {}) => {
  const { lang = 'en' } = data
  const out = lang === 'en' ? id : `${lang}/${id}`
  const dest = out === 'index' ? 'index.html' : `${out}/index.html`
  const tmpl = resolve(__dirname, '..', `src/${template}.pug`)
  const options = Object.assign({}, config, { template, lang, id }, data)
  const rendered = pug.renderFile(tmpl, options)
  const dst = resolve(__dirname, '..', 'dist', dest)
  const dir = dirname(dst)

  mkdirSync(dir, { recursive: true })
  writeFileSync(dst, rendered)
}

// pages
pages.forEach(page => {
  const { template = 'page' } = page
  renderPage(template, page.permalink, page)
})

// blog
posts.forEach(page => {
  renderPage('post', page.permalink, page)
})

tags.forEach(page => {
  const { template = 'blog' } = page
  renderPage(template, page.permalink, page)
})
