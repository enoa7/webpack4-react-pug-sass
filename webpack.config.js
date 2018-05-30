var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
let extractHtml = new ExtractTextPlugin("[name].html");

// Is the current build a development build
var IS_DEV = process.env.NODE_ENV === "development";

module.exports = {
  entry: ["react-hot-loader/patch", "./src/index.js"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            context: "./src/img/"
          }
        }
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].html",
              context: "./src/view/"
            }
          },
          "extract-loader",
          {
            loader: "html-loader",
            options: {
              root: path.resolve(__dirname, "./src/img/")
            }
          },
          {
            loader: "pug-html-loader",
            options: {
              pretty: true,
              data: {
                env: IS_DEV
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".html"]
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js",
    hotUpdateChunkFilename: "hot/hot-update.js",
    hotUpdateMainFilename: "hot/hot-update.json"
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), extractHtml],
  devServer: {
    open: true,
    // contentBase: "./dist",
    // watchContentBase: true,
    hot: true,
    watchOptions: {
      ignored: /node_modules/
    }
  }
};
