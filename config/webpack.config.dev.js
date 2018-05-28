var merge = require("webpack-merge");
var webpackConfig = require("../webpack.config");

module.exports = merge(webpackConfig, {
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } }
        ]
      }
    ]
  }
});
