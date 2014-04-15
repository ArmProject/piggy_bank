angular.module('templates-app', ['compare/compare.tpl.html', 'compare/directive/item.tpl.html', 'home/home.tpl.html', 'main/directive/menu.tpl.html', 'main/main.tpl.html', 'profile/directive/item.tpl.html', 'profile/profile.tpl.html']);

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
    "");
}]);

angular.module("main/main.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main/main.tpl.html",
    "");
}]);

angular.module("profile/directive/item.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("profile/directive/item.tpl.html",
    "<div>item</div>");
}]);

angular.module("profile/profile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("profile/profile.tpl.html",
    "<div>profile</div>");
}]);
