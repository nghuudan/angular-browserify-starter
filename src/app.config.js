/**
 * Configuration for the application
 * @param {Provider} $locationProvider  Angular location provider
 * @param {Provider} $stateProvider     UI Router state provider
 * @param {Provider} $urlRouterProvider UI Router url router provider
 */
export const AppConfig = ($locationProvider, $stateProvider, $urlRouterProvider) => {
	'ngInject';

	$locationProvider.html5Mode(true);

	$stateProvider
		.state({
			name: 'home',
			url: '/',
			component: 'dnHome',
			resolve: {
				message: (HelloService) => HelloService.getMessage()
			}
		})
		.state({
			name: 'demo',
			url: '/demo',
			component: 'dnDemo',
			resolve: {
				demoList: (DemoService) => DemoService.getDemoList()
			}
		})
		.state({
			name: 'demoChosen',
			url: '/demo/{demoId}',
			component: 'dnDemo',
			resolve: {
				chosenDemo: (DemoService, $stateParams) => DemoService.getDemoById($stateParams.demoId)
			}
		});

	$urlRouterProvider.otherwise('/');
};

export default AppConfig;
