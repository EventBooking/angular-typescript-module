var webpackConfig = require('./webpack.config');

module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['mocha', 'chai', 'sinon'],
		client: {
			mocha: {
				reporter: 'html'
			}
		},
		files: [
			'tests/**/*.test.ts'
		],
		exclude: [
		],
		preprocessors: {
			'src/**/*.ts': ['webpack'],
			'tests/**/*.ts': ['webpack']
		},
		mime: {
			'text/x-typescript': ['ts']
		},
		webpack: webpackConfig,
		reporters: ['progress'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['Chrome'],
		singleRun: false,
		concurrency: Infinity
	})
}