const path = require('path');

module.exports = {
  mode: 'development',

  // 入口起点
  // @see https://www.webpackjs.com/concepts/#入口-entry-
  // @see https://www.webpackjs.com/configuration/#选项
  // @see [单个入口-简写-语法](https://www.webpackjs.com/concepts/entry-points/#单个入口-简写-语法)
  entry: {
    app: './src/index.js'
  },

  // 出口配置
  // @see https://www.webpackjs.com/concepts/#出口-output-
  // @see [用法](https://www.webpackjs.com/concepts/output/#用法-usage-)
  output: {
    path: path.resolve(__dirname, 'dist'),
    // 每次生成的文件会带 `hash`
    // filename: 'app-[hash].js'
    filename: 'app.js'
  },

  // module: {
  //   rules: [{
  //     test: /(\.jsx|\.js)$/,
  //     use: {
  //       loader: 'babel-loader'
  //     },
  //     exclude: /node_modules/
  //   }]
  // }
}