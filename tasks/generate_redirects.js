const { mkdirSync, writeFileSync } = require('fs')
const { dirname, join, resolve } = require('path')

// old, new
const redirects = [
  ['/termsConditions.html', '/terms-and-conditions/'],
  ['/privacyPolicy.html', '/privacy-policy/'],
  ['/beta/', '/apk/'],
]

const dist = resolve(__dirname, '..', 'dist')

const exists = filePath => {
  try {
    const stat = fs.statSync(filePath)
    return stat.isFile() || stat.isDirectory()
  } catch (err) {
    return false
  }
}

redirects.forEach(([path, redirect]) => {
  const filePath = path.endsWith('.html') ? path : join(path, 'index.html')
  const target = join(dist, filePath)
  if (exists(target)) return

  mkdirSync(dirname(target), { recursive: true })
  writeFileSync(
    target,
    `<!DOCTYPE html><html><title>Redirect</title><link rel="canonical" href="${redirect}"><script>location="${redirect}"</script><meta http-equiv="refresh" content="0;url=${redirect}"><meta name="robots" content="noindex"><a href="${redirect}">Click here if you are not redirected.</a></html>`,
  )
})
