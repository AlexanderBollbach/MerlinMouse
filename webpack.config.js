var path = require("path");
var webpack = require("webpack");

module.exports = {
	entry: "./src/main.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				query: {
					presets: ["es2015"]
				}
			}
		]
	},
	stats: {
		colors: true
	},
	devtool: "source-map",
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000
	}
};
