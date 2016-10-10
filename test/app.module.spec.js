describe('AppModule', function() {
	'use strict';

	var $controller;

	beforeEach(module('App'));

	beforeEach(inject(function(_$controller_) {
		$controller = _$controller_;
	}));

	describe('AppCtrl', function() {
		var $ctrl;
		var $scope;
		var deferred;
		var HelloService;

		beforeEach(inject(function(_$q_, _$rootScope_, _HelloService_) {
			$scope = _$rootScope_.$new();
			deferred = _$q_.defer();
			HelloService = _HelloService_;

			spyOn(HelloService, 'getMessage').and.returnValue(deferred.promise);

			$ctrl = $controller('AppCtrl', {
				$scope: $scope,
				HelloService: HelloService
			});
		}));

		it('should set title', function() {
			expect($ctrl.title).toBeDefined();
		});

		it('should set menu', function() {
			expect($ctrl.menu).toBeDefined();
		});

		it('should get and set message from promise', function() {
			var message = 'Hello, World!';
			deferred.resolve(message);
			$scope.$apply();
			expect($ctrl.message).toBe(message);
		});
	});
});
