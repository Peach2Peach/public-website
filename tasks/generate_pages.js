const pug = require('pug')
const { mkdirSync, writeFileSync } = require('fs')
const { dirname, resolve } = require('path')
const { posts, pages } = require('../site-data.json')
const config = require('../pug.config')

const renderPage = (template, id, data = {}, lang = 'en') => {
  const page = lang === 'en' ? id : `${lang}/${id}`
  const dest = id === 'index' ? 'index.html' : `${id}/index.html`
  const tmpl = resolve(__dirname, '..', `src/${template}.pug`)
  const options = Object.assign({}, config, { template, lang, id }, data)
  const rendered = pug.renderFile(tmpl, options)
  const dst = resolve(__dirname, '..', 'dist', dest)
  const dir = dirname(dst)

  mkdirSync(dir, { recursive: true })
  writeFileSync(dst, rendered)
}

// pages
renderPage('index', 'index')
pages.forEach(page => {
  renderPage('page', page.permalink, page)
})


// blog
renderPage('blog', 'blog')
posts.forEach(post => {
  renderPage('post', post.permalink, post)
})
