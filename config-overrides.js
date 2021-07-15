const path = require('path');

const { 
  override, fixBabelImports, 
  addWebpackResolve, 
  addWebpackAlias,
  addDecoratorsLegacy
 } = require('customize-cra');

module.exports = override(
  /** 按需加载 */
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  addWebpackResolve({
    extensions: [".js", ".json", ".jsx"]
  }),
  /** 别名 */
  addWebpackAlias({
    "@": path.resolve(__dirname, "src"),
    "@assets": path.resolve(__dirname, 'src/assets/'),
    "@utils": path.resolve(__dirname, 'src/utils')
  }),
  addDecoratorsLegacy()
);