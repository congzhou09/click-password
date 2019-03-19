var pkg = require('./package.json');
var Webpack = require("webpack");
var Path = require('path');

module.exports = {
    mode: "production",
    entry: Path.resolve(__dirname, "./index.js"),
    output: {
        path: Path.resolve(__dirname, "./dist"),
        filename: "click-password-" + pkg.version + ".min.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new Webpack.BannerPlugin([
            'click-password v' + pkg.version + ' (' + pkg.homepage + ')',
            '',
            'Copyright (C) 2019. Free to use, very pleased to reserve my name: "Congzhou" ',
        ].join('\n'))
    ]
};