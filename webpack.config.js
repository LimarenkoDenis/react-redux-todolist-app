var webpack = require('webpack');
var merge = require('webpack-merge');
var path = require('path');

var common = {
	entry: path.resolve(__dirname, 'src/app.tsx'),
	output: {
		publicPath: '/build/',
		path: 'build',
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['', '.ts', '.tsx', '.js']
	},
	module: {
		loaders: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: 'ts-loader'
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.(son)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader',
				exclude: 'node_modules'
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: 'file-loader'
			}
		]
	}
};

if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
    module.exports = merge(common, {
        devServer: {
            inline: true,
            hot: true,
			contentBase: '.',
			historyApiFallback: true
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('development')
                }
            })
        ]
    });
}

if (process.env.NODE_ENV === 'production') {
    module.exports = merge(common, {
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new webpack.optimize.OccurrenceOrderPlugin(true),
            new webpack.optimize.DedupePlugin(),
        ]
    })
}

