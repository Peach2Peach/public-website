// initialize markdown rendering
const {
  getUrl,
  assetPath,
  assetUrl,
  slugify,
  displayDate,
  IS_DEV
} = require('./helpers')

module.exports = {
  basedir: './src/includes',
  siteData: require('./site-data'),
  getUrl,
  assetUrl,
  assetPath,
  slugify,
  displayDate,
  IS_DEV
}
