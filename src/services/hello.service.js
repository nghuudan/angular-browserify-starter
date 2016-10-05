export default class HelloService {
	//@ngInject
	constructor($timeout) {
		this.$timeout = $timeout;
	}
	getMessage() {
		return this.$timeout(() => 'Hello, World!', 200);
	}
}
