describe('HelloService', function() {
	'use strict';

	beforeEach(module('AppServices'));

	it('should define message', inject(function(HelloService) {
		expect(HelloService._message).toBeDefined();
	}));

	it('should get message and return promise', inject(function($q, $rootScope, HelloService) {
		var deferred = $q.defer();
		var messageValue;
		var mockMessageValue = HelloService._message;

		spyOn(HelloService, 'getMessage').and.returnValue(deferred.promise);

		HelloService.getMessage().then(function(message) {
			messageValue = message;
		});

		deferred.resolve(mockMessageValue);

		$rootScope.$apply();

		expect(messageValue).toBe(mockMessageValue);
	}));
});
