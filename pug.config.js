// initialize markdown rendering
const {
  getUrl,
  assetPath,
  assetUrl,
  slugify,
  displayDate,
  IS_DEV
} = require('./helpers')

const i18n = require('./i18n')

module.exports = {
  basedir: './src/includes',
  siteData: require('./site-data'),
  i18n,
  getUrl,
  assetUrl,
  assetPath,
  slugify,
  displayDate,
  IS_DEV
}
