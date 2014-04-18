app.controller('MainCtrl', ['$scope',
	function($scope) {
		$scope.$on('init_page', function(e, data) {
			$scope.data = data;
			$scope.haveNavBottom = angular.isDefined(data.navBottomLeft) ||
				angular.isDefined(data.navBottomRight);
		});
	}
]);