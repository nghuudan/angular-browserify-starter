export default class AppCtrl {
	//@ngInject
	constructor(HelloService) {
		this.title = 'Angular Browserify Starter';

		this.menu = [
			{
				name: 'home',
				text: 'Home'
			},
			{
				name: 'demo',
				text: 'Demo'
			}
		];

		HelloService.getMessage().then(message => this.message = message);
	}
}
