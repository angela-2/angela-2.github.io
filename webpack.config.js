const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		vendor: ['./src/javascripts/canvas.js', './src/javascripts/panels.js', './src/javascripts/projects.js', './src/styles/styles.css']
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	},
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings:false
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
	module: {
		loaders: [
			{
      	test: /\.js$/,
      	exclude: /(node_modules|bower_components)/,
      	loader: 'babel-loader',
      	query: {
        	presets: ['es2015']
      	}
    	},
    	{
				test: /\.scss$/,
				loader: "style!css!sass"
			},
			//{ test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
      {test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, loader: 'url-loader'},
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
		]
	}
};