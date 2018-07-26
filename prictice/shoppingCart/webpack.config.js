let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.js'
	},
	output: {
		path: path.join(__dirname, './dist'),
		filename: '[name].js'
	},
	// module: {
	// 	rules: [{
	// 		test: /\.js$/,
	// 		use: {
	// 			loader: 'babel-loader'
	// 		}
	// 	}]
	// },
	devServer: {
		port: 3200,
		proxy: {
			"/json": {
				target: 'http://localhost:8082/'
			}
		}
	},
	plugins: [
		new htmlWebpackPlugin({
			template: 'index.html'
		}),
		new webpack.ProvidePlugin({
			'$': 'jquery'
		})
	]
};