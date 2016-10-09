module.exports = function(config) {
	'use strict';

	config.set({
		basePath: './',
		browsers: ['PhantomJS'],
		files: [
			'build/**/*.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'test/**/*.spec.js'
		],
		frameworks: ['jasmine'],
		reporters: ['spec'],
		singleRun: true
	});
};
