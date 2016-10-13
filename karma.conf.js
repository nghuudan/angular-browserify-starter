module.exports = function(config) {
	'use strict';

	config.set({
		basePath: './',
		browserify: {
			debug: true,
			transform: ['babelify']
		},
		browsers: ['PhantomJS'],
		files: [
			'src/**/*.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'test/**/*.spec.js'
		],
		frameworks: ['browserify', 'jasmine'],
		preprocessors: {
			'src/**/*.js': ['browserify']
		},
		reporters: ['spec'],
		singleRun: true
	});
};
