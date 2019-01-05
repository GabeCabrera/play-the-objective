const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: ['babel-loader']
		},
		{
			test: /\.css$/,
			use: ['style-loader', 'css-loader'],
		},
		]
	},
	resolve: {
		extensions: ['*', '.js'],
		modules: [
			path.resolve('./src'),
			path.resolve('./node_modules')
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: 'Custom template',
			// Load a custom template (lodash by default)
			template: './src/index.html'
		  })
	],
	devServer: {
		contentBase: '/dist',
		hot: true
	}
};