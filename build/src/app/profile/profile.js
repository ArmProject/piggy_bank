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
					name: "example",
					type: "Fund"
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
			navTopLeft: 'profile/directive/back.tpl.html',
			navTopRight: 'profile/directive/save.tpl.html',
			navBottomRight: 'profile/directive/remove.tpl.html'
		});
		$scope.service = CompareService;
		// ProfileService.temp = {};
		$scope.data = ProfileService.temp;
		$scope.$watch('data.type', function(newV, oldV) {
			if (newV != oldV) {
				var type = $scope.data.type;
				$scope.data.data = CompareService.data[type];
			}
		})
	}
]);
app.controller('ProfileCheckCtrl', ['$scope', '$localStorage', 'ProfileService',
	function($scope, $localStorage, ProfileService) {
		$scope.$emit('init_page', {
			title: 'Check',
			navTopLeft: 'main/directive/menu.tpl.html',
			navTopRight: 'profile/directive/add.tpl.html',
			navBottomRight: 'profile/directive/total.tpl.html'
		});
		ProfileService.list = $localStorage.profile;
		$scope.service = ProfileService;
		ProfileService.check();
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
		$scope.service = ProfileService;
		$scope.remove = function() {
			console.log("remove");
		};
		$scope.back = function() {
			$state.go('profile');
		};
	}
]);