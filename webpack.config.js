const webpack = require('webpack');
const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: __dirname + '/output',
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
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: './output',
		hot: true
	}
};