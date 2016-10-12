import angular from 'angular';
import DemoService from './demo/demo.service';
import HelloService from './hello/hello.service';

export const AppServicesModule = angular.module('AppServices', [])
	.service('DemoService', DemoService)
	.service('HelloService', HelloService);

export default AppServicesModule;