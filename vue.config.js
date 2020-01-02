const webpack = require("webpack");
module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ]
  },
  devServer: {
    proxy: {
      //代理跨域
      "/submitLogin": {
        target: "https://irs.zuvio.com.tw/irs/login/zh-TW", // 需要代理的地址
        changeOrigin: true, //是否跨域
        secure: true, // 如果是https接口，需要配置这个参数
        pathRewrite: {
          //重写接口地址
          "^/submitLogin": ""
        },
        headers: {
          //header设置
          referer: "https://irs.zuvio.com.tw/irs/login/zh-TW/", //referer
          origin: "https://irs.zuvio.com.tw/irs/login/zh-TW"
        }
      },
      "/answerEvaluation": {
        target: "https://irs.zuvio.com.tw", // 需要代理的地址
        changeOrigin: true, //是否跨域
        secure: true, // 如果是https接口，需要配置这个参数
        pathRewrite: {
          //重写接口地址
          "^/answerEvaluation": ""
        },
        headers: {
          //header设置
          referer:
            "https://irs.zuvio.com.tw/student5/irs/evaluation/7308955/2761672", //referer
          origin: "https://irs.zuvio.com.tw"
        }
      }
    }
  }
};
