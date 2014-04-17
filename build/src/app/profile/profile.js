app.controller('ProfileCtrl', ['$scope',
	function($scope) {
		$scope.$emit('change_page',{
			title:'Profile',
			menuLeft: 'main/directive/menu.tpl.html',
			menuRight: 'profile/directive/add.tpl.html'
		})
	}
]);
app.controller('AddCtrl', ['$scope', function($scope){
	$scope.add = function(){
		console.log("add")
	}
}]);