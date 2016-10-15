/**
 * Component for the home page
 * @type {Object}
 */
export const HomeComponent = {
	bindings: {
		message: '<'
	},
	template: `
		<h2>{{$ctrl.message}}</h2>
	`
};

export default HomeComponent;
