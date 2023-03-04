// initialize markdown rendering
const {
  assetPath,
  assetUrl,
  slugify,
  displayDate,
  IS_DEV
} = require('./helpers')

module.exports = {
  basedir: './src/includes',
  siteData: require('./site-data'),
  assetUrl,
  assetPath,
  slugify,
  displayDate,
  IS_DEV
}
