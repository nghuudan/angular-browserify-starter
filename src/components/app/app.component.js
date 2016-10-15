/**
 * Main component for the application
 * @type {Object}
 */
export const AppComponent = {
	controller: 'AppCtrl',
	controllerAs: 'app',
	template: `
		<h1>{{app.title}}</h1>
		<dn-menu list="app.menu"></dn-menu>
		<ui-view></ui-view>
	`
};

export default AppComponent;
