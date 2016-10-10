describe('HelloService', function() {
	'use strict';

	beforeEach(module('App'));

	it('should get message and return promise', inject(function($q, $rootScope, HelloService) {
		var deferred = $q.defer();
		var promise = deferred.promise;
		var messageValue;
		var mockMessageValue = 'Hello, World!';

		spyOn(HelloService, 'getMessage').and.returnValue(deferred.promise);

		HelloService.getMessage().then(function(message) {
			messageValue = message;
		});

		deferred.resolve(mockMessageValue)

		$rootScope.$apply();

		expect(messageValue).toBeDefined(mockMessageValue);
	}));
});
