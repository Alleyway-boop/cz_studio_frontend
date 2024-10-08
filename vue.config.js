const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave :false,
  devServer :{
    proxy:{
        '/api' :{
          target :'https://information.17wanxiao.com',
          changeOrigin:true
        }
    }
  },
    // configureWebpack: {
    //     resolve: { extensions: [".ts", ".tsx", ".js", ".json"] },
    //     module: {
    //         rules: [
    //             {
    //                 test: /\.tsx?$/,
    //                 loader: 'ts-loader',
    //                 exclude: /node_modules/,
    //                 options: {
    //                     appendTsSuffixTo: [/\.vue$/],
    //                 }
    //             }
    //         ]
    //     }
    // }
})


