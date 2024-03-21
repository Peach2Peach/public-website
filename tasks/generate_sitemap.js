const pug = require('pug')
const { globSync } = require('glob')
const { writeFileSync } = require('fs')
const { resolve } = require('path')

const html = globSync(resolve(__dirname, '..', `dist/**/*.html`))
const pages = html.map(file =>
  file.replace(/.*\/dist/, 'https://peachbitcoin.com'),
)
const now = new Date().toISOString()
const file = resolve(__dirname, '..', `src/includes/sitemap.pug`)
const rendered = pug.renderFile(file, { pages, now, pretty: true })
const dst = resolve(__dirname, '..', 'dist', 'sitemap.xml')

writeFileSync(dst, rendered)
