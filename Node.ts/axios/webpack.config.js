// webpack 처리 파일
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./index.ts",
  },
  module: {
    rules: [
      {
        test: /.ts?$/,
        loader: "awesome-typescript-loader",
        options: {
          useBabel: true,
          babelOptions: {
            babelrc: false,
            presets: ["@babel/preset-env"],
            // plugin: ["add-module-exports"],
          },
          //   babelCore: "@babel/core",
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname), // __dirname 는 현재 경로라는 뜻
    filename: "[name].js",
    library: "axios",
    libraryTarget: "umd",
  },
};
