// initialize markdown rendering
const {
  assetPath,
  assetUrl
} = require('./helpers')

module.exports = {
  basedir: './src/includes',
  siteData: require('./site-data'),
  assetUrl,
  assetPath
}
