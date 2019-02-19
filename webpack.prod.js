const merge = require("webpack-merge"),
  webpack = require("webpack"),
  common = require("./webpack.js");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        keep_fnames: true
      },
      output: {
        comments: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  ]
});
