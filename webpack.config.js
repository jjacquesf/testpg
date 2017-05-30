const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const ENV = require('./env');
const PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'www'),
};

process.env.BABEL_ENV = ENV;

const common = {
	entry: PATHS.app,
	output: {
		path: PATHS.build,
		filename: 'bundle.js',
		libraryTarget: 'var',
		library: 'MobileApp'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader?cacheDirectory',
				include: PATHS.app,
			},		
			{
		        test: /\.css$/,
		        use: [
		          { loader: "style-loader" },
		          { loader: "css-loader" }
		        ]
      		},
			{
				test: /\.styl$/,
				loader: 'style-loader!css-loader!stylus-loader',
				include: PATHS.app,
			},
			{
				test: /\.(jpe?g|png|gif|svg|ttf|eot|woff|woff2)$/i, 
				loader: "file-loader"
			}
		]
	}
};

if (ENV === 'development') {
	module.exports = merge(common, {
		devServer: {
			contentBase: PATHS.build,

			// Enable history API fallback so HTML5 History API based
			// routing works. This is a good default that will come
			// in handy in more complicated setups.
			historyApiFallback: true,
			hot: true,
			inline: true,
			// progress: true,

			// Display only errors to reduce the amount of output.
			stats: 'errors-only',

			// Parse host and port from env so this is easy to customize.
			host: process.env.HOST,
			port: process.env.PORT,
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
		],
	});
} else {
	// config can be added here for minifying / etc
	module.exports = merge(common, {});
}
