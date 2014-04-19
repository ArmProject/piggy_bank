app.directive('dialog', [

	function() {
		return {
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			templateUrl: 'profile/directive/dialog.tpl.html',
			link: function(scope, iElm, iAttrs, controller) {
				console.log(scope)
			}
		};
	}
]);