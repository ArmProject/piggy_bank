app.controller('ProfileCtrl', ['$scope',
	function($scope) {
		$scope.$emit('init_page',{
			title:'Profile',
			navTopLeft: 'main/directive/menu.tpl.html',
			navTopRight: 'profile/directive/add.tpl.html',
			navBottomLeft: 'profile/directive/add.tpl.html'
		});
	}
]);
app.controller('AddCtrl', ['$scope', function($scope){
	$scope.add = function(){
		console.log("add");
	};
}]);