const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/image-editor.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "image-editor.min.js",
        library: "ImageEditor",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        query: {
                            presets: ["@babel/preset-env"],
                        },
                    },
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                ]
            }
        ]
    },
    externals: [],
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.join(__dirname, "app")
    }
};