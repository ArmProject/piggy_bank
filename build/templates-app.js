angular.module('templates-app', ['compare/compare.tpl.html', 'compare/directive/item.tpl.html', 'home/home.tpl.html', 'main/directive/menu.tpl.html', 'main/directive/sidebar.tpl.html', 'main/nav_bottom.tpl.html', 'main/nav_top.tpl.html', 'profile/directive/add.tpl.html', 'profile/directive/item.tpl.html', 'profile/profile.tpl.html']);

angular.module("compare/compare.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("compare/compare.tpl.html",
    "");
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
    "\n" +
    "<div class=\"scrollable\"  toggle=\"off\" bubble target=\"mainSidebar\">\n" +
    "	<div class=\"scrollable-content\">\n" +
    "		<h5 class=\"app-name\">Mobile Angular UI</h5>\n" +
    "		<div class=\"list-group\">\n" +
    "			<a class=\"list-group-item\" href=\"#/\">\n" +
    "				Home \n" +
    "				<i class=\"fa fa-chevron-right pull-right\"></i>\n" +
    "			</a>\n" +
    "			<a class=\"list-group-item\" href=\"#/\">\n" +
    "				Profile\n" +
    "				<i class=\"fa fa-chevron-right pull-right\"></i>\n" +
    "			</a>\n" +
    "			<a class=\"list-group-item\" href=\"#/\">\n" +
    "				Toggle \n" +
    "				<i class=\"fa fa-chevron-right pull-right\"></i>\n" +
    "			</a>\n" +
    "		</div>\n" +
    "		<h5 class=\"app-name\">Mobile Angular UI</h5>\n" +
    "		<div class=\"list-group\">\n" +
    "			<a class=\"list-group-item\" href=\"#/\">\n" +
    "				Home \n" +
    "				<i class=\"fa fa-chevron-right pull-right\"></i>\n" +
    "			</a>\n" +
    "			<a class=\"list-group-item\" href=\"#/\">\n" +
    "				Profile\n" +
    "				<i class=\"fa fa-chevron-right pull-right\"></i>\n" +
    "			</a>\n" +
    "			<a class=\"list-group-item\" href=\"#/\">\n" +
    "				Toggle \n" +
    "				<i class=\"fa fa-chevron-right pull-right\"></i>\n" +
    "			</a>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("main/nav_bottom.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main/nav_bottom.tpl.html",
    "<div class=\"navbar navbar-app navbar-absolute-bottom\" ng-show=\"haveNavBottom\">\n" +
    "		<div class=\"btn-group pull-left\">\n" +
    "		<div ng-include=\"data.navBottomLeft\"></div>\n" +
    "	</div>\n" +
    "	<div class=\"btn-group pull-right\">\n" +
    "		<div ng-include=\"data.navBottomRight\"></div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("main/nav_top.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main/nav_top.tpl.html",
    "<div class=\"navbar navbar-app navbar-absolute-top\">\n" +
    "	<div class=\"navbar-brand navbar-brand-center\">\n" +
    "		{{data.title}}\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"btn-group pull-left\">\n" +
    "		<div ng-include=\"data.navTopLeft\"></div>\n" +
    "	</div>\n" +
    "	<div class=\"btn-group pull-right\">\n" +
    "		<div ng-include=\"data.navTopRight\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("profile/directive/add.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("profile/directive/add.tpl.html",
    "<div ng-controller=\"AddCtrl\">\n" +
    "	<div ng-click=\"add()\" class=\"btn btn-navbar\">\n" +
    "		Add\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("profile/directive/item.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("profile/directive/item.tpl.html",
    "<div>item</div>");
}]);

angular.module("profile/profile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("profile/profile.tpl.html",
    "");
}]);
