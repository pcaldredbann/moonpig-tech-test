const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: path.join(__dirname, '/public/index.html'),
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: {
		main: './src/index.js'
	},

	target: 'web',

	mode: 'development',

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader']
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					'css-loader'
				]
			},
			{
				test: /\.(scss)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => [precss, autoprefixer]
						}
					},
					{
						loader: 'sass-loader'
					}
				]
			},
			{
				test: /\.svg$/,
				loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=fonts/[name].[ext]'
			},
			{
				test: /\.woff$/,
				loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=fonts/[name].[ext]'
			},
			{
				test: /\.woff2$/,
				loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=fonts/[name].[ext]'
			},
			{
				test: /\.[ot]tf$/,
				loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[ext]'
			},
			{
				test: /\.eot$/,
				loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]'
			},
			{
				test: /\.png$/,
				loader: 'file-loader?limit=65000&mimetype=application/png&name=img/[name].[ext]'
			}
		]
	},

	resolve: {
		extensions: ['*', '.js', '.jsx']
	},

	output: {
		path: path.join(__dirname, '/dist'),
		publicPath: '/',
		filename: 'bundle.js',
		pathinfo: false
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new MiniCssExtractPlugin({
			filename: 'bundle.css'
		}),
		HTMLWebpackPluginConfig
	],

	devServer: {
		contentBase: './dist',
		hot: true,
		compress: true,
		port: 9000,
		open: true
	}
};
