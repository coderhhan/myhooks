
module.exports = {
  output: {
    libraryTarget: 'umd',//umd打包构建
    globalObject: 'this',
  },
  mode: 'production',
  resolve: {
    extensions: ['.json', '.js'],
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.jsx?$/,
  //       use: {
  //         loader: 'babel-loader',
  //       },
  //     }
  //   ],
  // },
  externals: [
    {
      react: 'React',
    },
  ],
};
