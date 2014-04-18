app.controller('ProfileCtrl', ['$scope',
	function($scope) {
		$scope.$emit('init_page',{
			title:'Profile',
			navTopLeft: 'main/directive/menu.tpl.html',
			navTopRight: 'profile/directive/add.tpl.html',
			navBottomRight: 'profile/directive/remove.tpl.html'
		});
	}
]);
app.controller('RemoveCtrl', ['$scope', function($scope){
	$scope.remove = function(){
		console.log("remove");
	};
}]);