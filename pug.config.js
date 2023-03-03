// initialize markdown rendering
const {
  assetPath,
  assetUrl,
  slugify,
  IS_DEV
} = require('./helpers')

module.exports = {
  basedir: './src/includes',
  siteData: require('./site-data'),
  assetUrl,
  assetPath,
  slugify,
  IS_DEV
}
