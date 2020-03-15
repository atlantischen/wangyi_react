const {
  override,
  fixBabelImports,
  addPostcssPlugins,
  addLessLoader,
  addDecoratorsLegacy
} = require('customize-cra');
module.exports = override(
  addLessLoader({}),
  addPostcssPlugins([require('postcss-pxtorem')({
    rootValue: 37.5,
    propList: ['*']
  })]),
  addDecoratorsLegacy(),
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
)