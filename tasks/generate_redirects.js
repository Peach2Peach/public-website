const { mkdirSync, writeFileSync, readdirSync } = require('fs')
const { dirname, join, resolve } = require('path')

// old, new
const redirects = [
  ['/termsConditions.html', '/terms-and-conditions/'],
  ['/privacyPolicy.html', '/privacy-policy/'],
  ['/beta/', '/apk/'],
  ['/how-it-works/', '/how-to-buy-btc-no-kyc/'],
  ['/for-businesses/', '/peach-for-businesses/'],
  ['/for-meetups/', '/buy-btc-with-cash/'],
]

const contentDir = resolve(__dirname, '..', 'content')
const languageDirs = readdirSync(contentDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory() && dirent.name !== 'default')
  .map(dirent => dirent.name)

let globalRedirects = [...redirects] // Include the global redirects

languageDirs.forEach(lang => {
  const localizedRedirects = redirects.map(([oldPath, newPath]) => {
    return [`/${lang}${oldPath}`, `/${lang}${newPath}`]
  })
  globalRedirects = [...globalRedirects, ...localizedRedirects]
})


const dist = resolve(__dirname, '..', 'dist')

const exists = filePath => {
  try {
    const stat = fs.statSync(filePath)
    return stat.isFile() || stat.isDirectory()
  } catch (err) {
    return false
  }
}

globalRedirects.forEach(([path, redirect]) => {
  const filePath = path.endsWith('.html') ? path : join(path, 'index.html')
  const target = join(dist, filePath)
  if (exists(target)) return

  mkdirSync(dirname(target), { recursive: true })
  writeFileSync(
    target,
    `<!DOCTYPE html><html><title>Redirect</title><link rel="canonical" href="${redirect}"><script>location="${redirect}"</script><meta http-equiv="refresh" content="0;url=${redirect}"><meta name="robots" content="noindex"><a href="${redirect}">Click here if you are not redirected.</a></html>`,
  )
})
