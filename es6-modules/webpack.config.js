var path = require('path');

module.exports = {
	mode: 'none',
	entry: {
		app: './js/app.js'
	},
	output: {
			path: path.resolve(__dirname, 'build'),
			filename: '[chunkhash].bundle.js'
	},
	module: {
		rules: [{
			test: /\.m?js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		}]
	},
	stats: {
			colors: true
	},
	devtool: 'source-map'
};
