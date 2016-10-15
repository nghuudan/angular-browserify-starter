import angular from 'angular';
import DemoService from './demo/demo.service';
import HelloService from './hello/hello.service';

/**
 * Module for all the services
 * @type {Module}
 */
export const AppServicesModule = angular.module('AppServices', [])
	.service('DemoService', DemoService)
	.service('HelloService', HelloService);

export default AppServicesModule;
