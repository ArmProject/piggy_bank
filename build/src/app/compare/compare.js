app.controller('CompareCtrl', ['$scope', '$state', 'CompareService',
	function($scope, $state, CompareService) {
		var type = $state.current.data.type;
		
		$scope.data = CompareService.type[type];
	}
]);