const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

var HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin= require('copy-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
	path: path.resolve(__dirname, 'dist'),
	filename: 'bundle.js'
	},
	module: {
		rules: [
		    {
		        test: /\.js$/,
		        exclude: /node_modules/,
		        use: {
		          	loader: "babel-loader",
		          	options: {
         				 presets: ['@babel/preset-env']
       				}
		        }
		    },
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'i/[name].[ext]'
						}
					}
				]
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css'),
		new HtmlWebpackPlugin({
          hash: true,
          title : 'test',
          template : './src/index.html'
        }),
        new CopyWebpackPlugin([{
	        from: './src/i',
	        to: './images'}
	    ]),
	]
};