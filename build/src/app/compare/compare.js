app.controller('CompareCtrl', ['$scope', '$state', 'CompareService',
	function($scope, $state, CompareService) {
		var type = $state.current.data.type;

		$scope.service = CompareService.type[type];
		$scope.$emit('init_page', {
			title: $scope.service.title,
			navTopLeft: 'main/directive/menu.tpl.html',
			navTopRight: 'profile/directive/add.tpl.html',
		});
		$scope.checked = {}
		angular.forEach($scope.service.list, function(parent, name) {
			$scope.checked[name] = [];
			angular.forEach(parent, function(child, index) {
				$scope.checked[name].push(false);
			});
		});
	}
]);