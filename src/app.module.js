import angular from 'angular';
import 'angular-ui-router/release/angular-ui-router';
import AppConfig from './app.config';
import AppCtrl from './components/app/app.controller';
import AppComponent from './components/app/app.component';
import DemoComponent from './components/demo/demo.component';
import HomeComponent from './components/home/home.component';
import MenuComponent from './components/menu/menu.component';
import HelloService from './services/hello/hello.service';

export const AppModule = angular.module('App', ['ui.router'])
	.config(AppConfig)
	.controller('AppCtrl', AppCtrl)
	.component('dnApp', AppComponent)
	.component('dnDemo', DemoComponent)
	.component('dnHome', HomeComponent)
	.component('dnMenu', MenuComponent)
	.service('HelloService', HelloService);

export default AppModule;
