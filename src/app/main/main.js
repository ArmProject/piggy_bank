app.controller('MainCtrl', ['$scope', function($scope){
	$scope.$on('change_page',function(e,data){
		$scope.data = data;
	});
}]);

