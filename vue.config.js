const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  // devServer: {
  //   proxy: {
  //     "/api": {
  //       target: "https://od-api.oxforddictionaries.com",
  //       ws: true,
  //       changeOrigin: true,
  //     },
  //   },
  // },
});
