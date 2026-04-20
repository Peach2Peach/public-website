const pug = require('pug')
const { globSync } = require('glob')
const { writeFileSync } = require('fs')
const { resolve } = require('path')

const html = globSync(resolve(__dirname, '..', `dist/**/*.html`))
const pages = html
  .map(file =>
    file
      .replace(/.*\/dist/, 'https://peachbitcoin.com')
      .replace(/\/index\.html$/, '/'),
  )
  .filter(url => {
    // Exclude pages with <meta name="robots" content="noindex"> from the sitemap.
    const { readFileSync } = require('fs')
    const path = url.replace(
      'https://peachbitcoin.com',
      resolve(__dirname, '..', 'dist'),
    )
    const filePath = path.endsWith('/') ? `${path}index.html` : path
    try {
      const content = readFileSync(filePath, 'utf8')
      return !/<meta\s+name=["']robots["']\s+content=["'][^"']*noindex/i.test(
        content,
      )
    } catch (e) {
      return true
    }
  })
const now = new Date().toISOString()
const file = resolve(__dirname, '..', `src/includes/sitemap.pug`)
const rendered = pug.renderFile(file, { pages, now, pretty: true })
const dst = resolve(__dirname, '..', 'dist', 'sitemap.xml')

writeFileSync(dst, rendered)
