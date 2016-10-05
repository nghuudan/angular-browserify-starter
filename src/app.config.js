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
			component: 'dnDemo'
		})
		.state({
			name: 'demoChosen',
			url: '/demo/{demoId}',
			component: 'dnDemo',
			resolve: {
				chosenId: ($stateParams, $timeout) => $timeout(() => $stateParams.demoId, 200)
			}
		});

	$urlRouterProvider.otherwise('/');
};

export default AppConfig;
