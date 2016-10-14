/**
 * Service for the hello message
 */
export default class HelloService {
	/**
	 * @ngInject
	 * constructor - Injects the $timeout service from Angular
	 *
	 * @param  {Service} $timeout Angular service for timeouts
	 */
	constructor($timeout) {
		this._$timeout = $timeout;
		this._message = 'Hello, World';
	}

	/**
	 * Returns a promise with the message
	 *
	 * @return {Promise}  promise with the message
	 */
	getMessage() {
		return this._$timeout(() => this._message, 200);
	}
}
