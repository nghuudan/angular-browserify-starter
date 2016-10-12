describe('DemoService', function() {
	'use strict';

	var $q;
	var $rootScope;
	var DemoService;

	beforeEach(module('AppServices'));

	beforeEach(inject(function(_$q_, _$rootScope_, _DemoService_) {
		$q = _$q_;
		$rootScope = _$rootScope_;
		DemoService = _DemoService_;
	}));

	it('should set demoList', function() {
		expect(DemoService.demoList).toBeDefined();
	});

	it('should get demoList and return promise', function() {
		var deferred = $q.defer();
		var deferredDemoList;
		var demoList = DemoService.demoList;

		spyOn(DemoService, 'getDemoList').and.returnValue(deferred.promise);

		DemoService.getDemoList().then(function(demoList) {
			deferredDemoList = demoList;
		});

		deferred.resolve(demoList);

		$rootScope.$apply();

		expect(deferredDemoList).toBe(demoList);
	});

	it('should find demo by id and return demo', function() {
		var demo = DemoService._findDemoById(0);
		expect(demo).toBeUndefined();
		demo = DemoService._findDemoById(1);
		expect(demo).toBe(DemoService.demoList[0]);
	});

	it('should get demo by id and return promise', function() {
		var deferred = $q.defer();
		var deferredDemo;
		var demoId = 1;
		var demo = DemoService._findDemoById(demoId);

		spyOn(DemoService, 'getDemoById').and.returnValue(deferred.promise);

		DemoService.getDemoById(demoId).then(function(demo) {
			deferredDemo = demo;
		});

		deferred.resolve(demo);

		$rootScope.$apply();

		expect(deferredDemo).toBe(demo);
	});
});
