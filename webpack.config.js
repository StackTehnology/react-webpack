const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // Where files should be sent once they are bundled
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
    port: 3000,
    hot: true,
  },
  // Rules of how webpack will take our files, complie & bundle them for the browser
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanAfterEveryBuildPatterns: ["dist"] }),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new MiniCssExtractPlugin(),
  ],
};
