// initialize markdown rendering
const {
  assetPath,
  assetUrl,
  slugify
} = require('./helpers')

module.exports = {
  basedir: './src/includes',
  siteData: require('./site-data'),
  assetUrl,
  assetPath,
  slugify
}
