angular.module('templates-app', ['compare/compare.tpl.html', 'compare/directive/compare.tpl.html', 'compare/directive/item.tpl.html', 'home/home.tpl.html', 'main/directive/menu.tpl.html', 'main/directive/sidebar.tpl.html', 'main/nav_bottom.tpl.html', 'main/nav_top.tpl.html', 'profile/directive/add.tpl.html', 'profile/directive/back.tpl.html', 'profile/directive/remove.tpl.html', 'profile/directive/save.tpl.html', 'profile/directive/total.tpl.html', 'profile/profile.tpl.html', 'profile/profile_add.tpl.html', 'profile/profile_check.tpl.html']);

angular.module("compare/compare.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("compare/compare.tpl.html",
    "<div class=\"list-group\">\n" +
    "	<div ng-repeat=\"(name,parent) in service.list\">\n" +
    "		<div class=\"list-group-item list-group-item-heading\">\n" +
    "			<span>{{name}}</span>\n" +
    "		</div>	\n" +
    "		<div ng-repeat=\"child in parent\" >\n" +
    "			<div  class=\"list-group-item\">\n" +
    "				<switch ng-model=\"checked[name][$index]\" style=\"float:left;\"></switch>\n" +
    "				<span>{{child.name}}</span>\n" +
    "				<!-- <input type=\"checkbox\" ng-model=\"checked[name][$index]\"/>\n" +
    "				{{child}} -->\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("compare/directive/compare.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("compare/directive/compare.tpl.html",
    "<div ng-controller=\"CompareServiceCtrl\">\n" +
    "	<div ng-click=\"compare()\" class=\"btn btn-navbar\">\n" +
    "		Compare\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("compare/directive/item.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("compare/directive/item.tpl.html",
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "");
}]);

angular.module("main/directive/menu.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main/directive/menu.tpl.html",
    "<div ng-click=\"toggle('mainSidebar')\" class=\"btn btn-navbar sidebar-toggle\">\n" +
    "	<i class=\"fa fa-bars\"></i> Menu\n" +
    "</div>");
}]);

angular.module("main/directive/sidebar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main/directive/sidebar.tpl.html",
    "<h5 class=\"app-name\">Menu</h5>\n" +
    "<div class=\"scrollable\" toggle=\"off\" bubble target=\"mainSidebar\">\n" +
    "	<div class=\"scrollable-content\">\n" +
    "		<div class=\"list-group\">\n" +
    "			<div class=\"list-group-item list-group-item-heading\">\n" +
    "				<span>Compare</span>\n" +
    "			</div>\n" +
    "			<a class=\"list-group-item sub-group\" ui-sref=\"compare_fund\">\n" +
    "				กองทุน\n" +
    "				<i class=\"fa fa-chevron-right pull-right\"></i>\n" +
    "			</a>\n" +
    "			<a class=\"list-group-item sub-group\" ui-sref=\"compare_lottery\">\n" +
    "				สลาก\n" +
    "				<i class=\"fa fa-chevron-right pull-right\"></i>\n" +
    "			</a>\n" +
    "			<a class=\"list-group-item sub-group\" ui-sref=\"compare_bond\">\n" +
    "				พันธบัตร \n" +
    "				<i class=\"fa fa-chevron-right pull-right\"></i>\n" +
    "			</a>\n" +
    "		</div>\n" +
    "		<div class=\"list-group\">\n" +
    "			<div class=\"list-group-item list-group-item-heading\">\n" +
    "				<span>My Port</span>\n" +
    "			</div>\n" +
    "			<a class=\"list-group-item sub-group\" ui-sref=\"profile\">\n" +
    "				Edit Data \n" +
    "				<i class=\"fa fa-chevron-right pull-right\"></i>\n" +
    "			</a>\n" +
    "			<a class=\"list-group-item sub-group\" ui-sref=\"profile_check\">\n" +
    "				Check Balance \n" +
    "				<i class=\"fa fa-chevron-right pull-right\"></i>\n" +
    "			</a>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("main/nav_bottom.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main/nav_bottom.tpl.html",
    "<div>\n" +
    "	<div class=\"btn-group pull-left\">\n" +
    "		<div ng-include=\"data.navBottomLeft\"></div>\n" +
    "	</div>\n" +
    "	<div class=\"btn-group pull-right\">\n" +
    "		<div ng-include=\"data.navBottomRight\"></div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("main/nav_top.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main/nav_top.tpl.html",
    "<div class=\"navbar-brand navbar-brand-center\">\n" +
    "	{{data.title}}\n" +
    "</div>\n" +
    "<div class=\"btn-group pull-left\">\n" +
    "	<div ng-include=\"data.navTopLeft\"></div>\n" +
    "</div>\n" +
    "<div class=\"btn-group pull-right\">\n" +
    "	<div ng-include=\"data.navTopRight\"></div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("profile/directive/add.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("profile/directive/add.tpl.html",
    "<div class=\"btn btn-navbar\" ui-sref=\"profile_add\">\n" +
    "	<i class=\"fa fa-plus-square\"></i> Add\n" +
    "</div>\n" +
    "");
}]);

angular.module("profile/directive/back.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("profile/directive/back.tpl.html",
    "<div ng-controller=\"ProfileServiceCtrl\">\n" +
    "	<div ng-click=\"back()\" class=\"btn btn-navbar\">\n" +
    "		Back\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("profile/directive/remove.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("profile/directive/remove.tpl.html",
    "<div ng-controller=\"ProfileServiceCtrl\">\n" +
    "	<div ng-click=\"remove()\" class=\"btn btn-navbar\">\n" +
    "		<i class=\"fa fa-trash-o\"></i> Remove\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("profile/directive/save.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("profile/directive/save.tpl.html",
    "<div ng-controller=\"ProfileServiceCtrl\">\n" +
    "	<div ng-click=\"save()\" class=\"btn btn-navbar\">\n" +
    "		Save\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("profile/directive/total.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("profile/directive/total.tpl.html",
    "<div ng-controller=\"ProfileServiceCtrl\" ng-init=\"check()\">\n" +
    "	<div class=\"btn-navbar\">\n" +
    "		Total : {{service.total}}\n" +
    "	</div>\n" +
    "	<!-- <input readonly=\"readonly\"> -->\n" +
    "</div>");
}]);

angular.module("profile/profile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("profile/profile.tpl.html",
    "<div class=\"scrollable\">\n" +
    "	<div class=\"scrollable-content\">\n" +
    "		<div class=\"list-group\">\n" +
    "			<div ng-repeat=\"data in service.list\">\n" +
    "				<a class=\"list-group-item\" >\n" +
    "					{{data.name}}\n" +
    "					<i class=\"fa fa-chevron-right pull-right\"></i>\n" +
    "				</a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("profile/profile_add.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("profile/profile_add.tpl.html",
    "<div class=\"scrollable\">\n" +
    "	<div class=\"scrollable-content\">\n" +
    "		<div bs-panel>\n" +
    "			<input type=\"text\" ng-model=\"data.name\" label=\"Name\" bs-input />\n" +
    "			<input type=\"text\" ng-model=\"data.owner\" label=\"Owner\" bs-input />\n" +
    "			<input type=\"text\" ng-model=\"service.type[data.type].title\" label=\"Type\" href=\"#type\" toggle=\"on\" readonly=\"readonly\" bs-input />\n" +
    "			<div ng-repeat=\"(key, model) in data.data\">\n" +
    "				<input type=\"text\" ng-model=\"data.data[key].value\" label=\"{{model.name}}\" bs-input />\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div overlay=\"type\">\n" +
    "			<h4 class=\"overlay-title\">Type</h4>    \n" +
    "			<div class=\"list-group\">\n" +
    "				<a class=\"list-group-item\" ng-click=\"data.type = 'FUND'\" href=\"#type\" toggle=\"off\">\n" +
    "					{{service.type.FUND.title}}\n" +
    "				</a>\n" +
    "				<a class=\"list-group-item\" ng-click=\"data.type = 'LOTTERY'\" href=\"#type\" toggle=\"off\">\n" +
    "					{{service.type.LOTTERY.title}}\n" +
    "				</a>\n" +
    "				<a class=\"list-group-item\" ng-click=\"data.type = 'BOND'\" href=\"#type\" toggle=\"off\">\n" +
    "					{{service.type.BOND.title}}\n" +
    "				</a>\n" +
    "			</div>  \n" +
    "		</div>\n" +
    "	</div>  \n" +
    "</div>");
}]);

angular.module("profile/profile_check.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("profile/profile_check.tpl.html",
    "<div class=\"list-group\">\n" +
    "	<div ng-repeat=\"data in service.list\">	\n" +
    "		<div  class=\"list-group-item\">\n" +
    "			<span>{{data.name}}</span>\n" +
    "			<span class=\"pull-right\">{{data.result}}</span>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);
