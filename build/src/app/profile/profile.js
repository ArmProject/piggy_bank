app.controller('ProfileCtrl', ['$scope', '$localStorage', 'ProfileService',
	function($scope, $localStorage, ProfileService) {
		$scope.$emit('init_page', {
			title: 'Profile',
			navTopLeft: 'main/directive/menu.tpl.html',
			navTopRight: 'profile/directive/add.tpl.html',
			navBottomRight: 'profile/directive/remove.tpl.html'
		});
		if (angular.isUndefined($localStorage.profile)) {
			$localStorage.$default({
				profile: [{
					name: "example"
				}]
			});
		}
		ProfileService.list = $localStorage.profile;
		$scope.service = ProfileService;
	}
]);
app.controller('ProfileAddCtrl', ['$scope', 'ProfileService', 'CompareService',
	function($scope, ProfileService, CompareService) {
		$scope.$emit('init_page', {
			title: 'Add',
			navTopLeft: 'main/directive/menu.tpl.html',
			navTopRight: 'profile/directive/save.tpl.html',
			navBottomRight: 'profile/directive/remove.tpl.html'
		});
		$scope.service = CompareService;
		// ProfileService.temp = {};
		$scope.data = ProfileService.temp;
	}
]);
app.controller('ProfileCheckCtrl', ['$scope', 'ProfileService',
	function($scope, ProfileService) {
		$scope.$emit('init_page', {
			title: 'Check',
			navTopLeft: 'main/directive/menu.tpl.html',
			navTopRight: 'profile/directive/add.tpl.html',
			navBottomRight: 'profile/directive/remove.tpl.html'
		});
		$scope.data = {};
		$scope.service = ProfileService;
	}
]);
app.controller('ProfileServiceCtrl', ['$scope', '$state', '$localStorage', 'ProfileService',
	function($scope, $state, $localStorage, ProfileService) {
		$scope.save = function() {
			try {
				ProfileService.save();
				$localStorage.$default({
					profile: ProfileService.list
				});
				$state.go('profile');
			} catch (e) {
				console.log(e);
			}
		};
		$scope.remove = function() {
			console.log("remove");
		};
	}
]);