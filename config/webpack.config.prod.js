var merge = require("webpack-merge");
var webpackConfig = require("../webpack.config.js");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(webpackConfig, {
  mode: "production",
  devtool: "eval",
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin({ filename: "app.css" })]
});
