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
      "/submitLogin": {
        target: "https://irs.zuvio.com.tw/irs/login/zh-TW",
        changeOrigin: true,
        secure: true,
        pathRewrite: {
          "^/submitLogin": ""
        },
        headers: {
          referer: "https://irs.zuvio.com.tw/irs/login/zh-TW/",
          origin: "https://irs.zuvio.com.tw/irs/login/zh-TW"
        }
      },
      "/answerEvaluation": {
        target: "https://irs.zuvio.com.tw",
        changeOrigin: true,
        secure: true,
        pathRewrite: {
          "^/answerEvaluation": ""
        },
        headers: {
          referer:
            "https://irs.zuvio.com.tw/student5/irs/evaluation/7308955/2761672", //referer
          origin: "https://irs.zuvio.com.tw"
        }
      }
    }
  }
};
