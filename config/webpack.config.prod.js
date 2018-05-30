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
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        use: [{
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            context: "./src/img/"
          }
        }, {
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true,
            mozjpeg: {
              progressive: false,
              quality: 90
            },
          },
        }
    ]
  },
  plugins: [new ExtractTextPlugin({ filename: "app.css" })]
});
