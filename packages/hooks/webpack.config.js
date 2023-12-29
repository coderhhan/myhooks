const merge = require('webpack-merge')
const common = require('../../webpack.common')
const path = require('path')
module.exports = merge(common,{
  entry:'./es/index.js',
  output:{
    filename:'uni-hooks.js',
    library:'uniHooks', //CDN引入之后 uniHooks.useHooks使用
    path:path.resolve(__dirname,'./dist')
  }
})
