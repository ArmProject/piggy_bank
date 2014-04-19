app.controller('ProfileCtrl', ['$scope', '$localStorage', 'ProfileService',
	function($scope, $localStorage, ProfileService) {
		$scope.$emit('init_page', {
			title: 'Profile',
			navTopLeft: 'main/directive/menu.tpl.html',
			navTopRight: 'profile/directive/add.tpl.html',
			navBottomRight: 'profile/directive/remove.tpl.html'
		});
		$scope.service = ProfileService;

		if (angular.isUndefined($localStorage.profile)) {
			$localStorage.$default({
				profile: [{
					name: "example"
				}]
			});
		}
		$scope.service.list = $localStorage.profile
	}
]);
app.controller('ProfileAddCtrl', ['$scope', 'ProfileService',
	function($scope, ProfileService) {
		$scope.$emit('init_page', {
			title: 'Add',
			navTopLeft: 'main/directive/menu.tpl.html',
			navTopRight: 'profile/directive/add.tpl.html',
			navBottomRight: 'profile/directive/remove.tpl.html'
		});
		$scope.data = {};
		$scope.service = ProfileService;
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
app.controller('RemoveCtrl', ['$scope',
	function($scope) {
		$scope.remove = function() {
			console.log("remove");
		};
	}
]);