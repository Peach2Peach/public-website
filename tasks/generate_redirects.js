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
    `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="robots" content="noindex, nofollow">
    <title>Redirecting to ${redirect}</title>
    <link rel="canonical" href="${redirect}">
    <meta name="description" content="You are being redirected to ${redirect}. Click the link if you are not automatically redirected.">
    <meta name="author" content="PeachBitcoin - The Best Marketplace to Buy Bitcoin No kyc - Top kyc free Marketplace">
    <script>
      // Redirect immediately
      window.location.replace("${redirect}");
    </script>
  </head>
  <body>
    <h1>Page Moved</h1>
    <p>This page has moved to <a href="${redirect}">${redirect}</a>.</p>
    <p>If you are not redirected automatically, please <a href="${redirect}">click here</a>.</p>
  </body>
</html>`
  )
})
