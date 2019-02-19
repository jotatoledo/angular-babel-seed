const path = require("path"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        vendor: [
            "@angular/common",
            "@angular/compiler",
            "@angular/core",
            "@angular/platform-browser",
            "@angular/platform-browser-dynamic",
            "@angular/router",
            "core-js",
            "rxjs",
            "zone.js"
        ],
        main: "./src/main.js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["raw-loader", "sass-loader"]
            },
            { test: /\.pug$/, loader: "pug-loader" },
            { test: /\.js$/, use: ["babel-loader"], exclude: /node_modules/ },
            { test: /\.html$/, loader: "raw-loader" }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: "src/assets", to: "assets", ignore: [".gitkeep"] }
        ]),
        new HtmlWebpackPlugin({
            template: "src/index.pug"
        })
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: `[name].js`
    }
};
