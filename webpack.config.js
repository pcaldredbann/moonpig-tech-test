const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
require('dotenv').config({
	path: process.env.NODE_ENV === 'production' ? path.resolve(__dirname, '.env.prod') : path.resolve(__dirname, '.env.dev')
});
const CleanWebpackPlugin = require('clean-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: path.join(__dirname, '/public/index.html'),
	filename: 'index.html',
	inject: 'body'
});

module.exports = () => {

	return {
		entry: [
			'babel-polyfill',
			'./src/index.js'
		],

		target: 'web',

		mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					// use: ['babel-loader', 'eslint-loader']
					use: ['babel-loader']
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
					loader: 'file-loader?limit=65000&mimetype=application/png&name=/img/[name].[ext]'
				}
			]
		},

		resolve: {
			extensions: ['*', '.js', '.jsx']
		},

		output: {
			path: path.join(__dirname, '/dist'),
			publicPath: process.env.SITE_URL,
			filename: 'bundle.js',
			pathinfo: false
		},

		plugins: [
			new webpack.DefinePlugin({
				'process.env.SITE_URL': JSON.stringify(process.env.SITE_URL),
				'process.env.SEARCH_API_URL': JSON.stringify(process.env.SEARCH_API_URL),
				'process.env.PRODUCT_API_URL': JSON.stringify(process.env.PRODUCT_API_URL)
			}),
			HTMLWebpackPluginConfig,
			new MiniCssExtractPlugin({
				filename: 'bundle.css'
			}),
			new webpack.HotModuleReplacementPlugin()			
		],

		devServer: {
			contentBase: './dist',
			publicPath: process.env.SITE_URL,
			hot: true,
			compress: true,
			port: 9000,
			open: true,
			historyApiFallback: true,
			proxy: {
				'/api': {
					target: 'https://search.moonpig.com',
					secure: false,
					changeOrigin: true
				},
				'/uk/api/product/product': {
					target: 'https://www.moonpig.com',
					secure: false,
					changeOrigin: true
				}
			}
		},

		devtool: process.env.NODE_ENV === 'development' ? 'source-map' : ''

	}

};
