var app = angular.module('app', [
	'templates-app',
	'templates-common',
	'mobile-angular-ui',
	'mobile-angular-ui.touch',
	'mobile-angular-ui.scrollable',
	'ui.router'
]);

app.config(["$stateProvider", "$urlRouterProvider",
	function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/profile');
		$stateProvider.state('profile', {
			url: '/profile',
			templateUrl: 'profile/profile.tpl.html',
			controller: 'ProfileCtrl'
		}).state('profile_add', {
			url: '/profile/add',
			templateUrl: 'profile/profile_add.tpl.html',
			controller: 'ProfileCtrl'
		}).state('home', {
			url: '/home',
			templateUrl: 'home/home.tpl.html',
			controller: 'HomeCtrl'
		}).state('compare_fund', {
			url: '/compare/fund',
			templateUrl: 'compare/compare.tpl.html',
			controller: 'CompareCtrl',
			data: {
				type: "FUND"
			}
		}).state('compare_lottery', {
			url: '/compare/lottery',
			templateUrl: 'compare/compare.tpl.html',
			controller: 'CompareCtrl',
			data: {
				type: "LOTTERY"
			}
		}).state('compare_bond', {
			url: '/compare/bond',
			templateUrl: 'compare/compare.tpl.html',
			controller: 'CompareCtrl',
			data: {
				type: "BOND"
			}
		});
	}
]);