"use strict";

var ShoppingCart = {};

var App = angular.module("ShoppingCart", []);

App.config(function($locationProvider, $routeProvider) {
  $routeProvider
    .when("/viewcart", {
      templateUrl: "resources/partials/cart.html",
      controller: "ShoppingCartViewerCtrl"
    })
    .when("/report", {
      templateUrl: "resources/partials/report.html",
      controller: "ShoppingCartViewerCtrl"
    })
    .when("/shop", {
      templateUrl: "resources/partials/shop.html",
      controller: "ShoppingCartViewerCtrl"
    })
    .when("/home", {
      templateUrl: "resources/partials/home.html",
      controller: "ShoppingCartViewerCtrl"
    });

  $routeProvider.otherwise({ redirectTo: "/home" });
});

App.run(function($rootScope, $location) {
  $rootScope.menuActive = function(url, exactMatch) {
    if (exactMatch) {
      return $location.path() == url;
    } else {
      return $location.path().indexOf(url) == 0;
    }
  };
});
