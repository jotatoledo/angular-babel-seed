const merge = require("webpack-merge"),
  common = require("./webpack.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  }
});
