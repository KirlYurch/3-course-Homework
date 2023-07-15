const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, , "css-loader"] },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "static", to: "static" }],
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html", // Указываем имя выходного файла
    }),
    new HtmlWebpackPlugin({
      template: "./src/level1.html",
      filename: "level1.html", // Указываем имя выходного файла
    }),
    new HtmlWebpackPlugin({
      template: "./src/level2.html",
      filename: "level2.html", // Указываем имя выходного файла
    }),
    new HtmlWebpackPlugin({
      template: "./src/level3.html",
      filename: "level3.html", // Указываем имя выходного файла
    }),
    new MiniCssExtractPlugin (),
  ],
  devtool: process.env.NODE_ENV === "production" ? false : "source-map",
  optimization: {
    minimizer: ["...", new CssMinimizerPlugin()],
  },
};
