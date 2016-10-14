/**
 * Controller for the {@link AppComponent}
 */
export default class AppCtrl {
	/**
	 * @ngInject
	 * constructor - Injects the HelloService to get hello messages
	 *
	 * @param  {Service} HelloService service to get the hello message
	 */
	constructor(HelloService) {
		/** @type {String} */
		this.title = 'Angular Browserify Starter';

		/** @type {Array<Object>} */
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

		/** @type {String} */
		this.message = null;

		HelloService.getMessage().then(message => this.message = message);
	}
}
