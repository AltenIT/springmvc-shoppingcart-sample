"use strict";

/**
 * @constructor
 */

(function() {
  angular
    .module("ShoppingCart")
    .controller("ShoppingCartViewerCtrl", function($scope, $rootScope, $http) {
      $scope.input = null;
      $scope.purchaseReceipt = null;
      $scope.cartItems = null;
      $scope.errorResponse = null;
      $scope.init = function() {
        //var view = (window.location.hash || "");
        //$scope.shoppingBucket = view.charAt(view.length-1);
        //console.log('shoppingBucket :'+$scope.shoppingBucket);
        //$scope.getShoppingBucketInput();
        //$scope.loadShoppingBucket();
        //console.log('Controller : ' +$scope)
        $scope.loadCart();
        $scope.viewPurchaseReceipt();
      };
      //
      //        $scope.getShoppingBucketInput = function() {
      //        	$http({
      //                url: 'viewbucketinput?bucket='+$scope.shoppingBucket,
      //                method: "GET",
      //                headers: {'Content-Type': 'application/json'}
      //            }).success(function (data, status, headers, config) {
      //            		$scope.input = data;
      //            		console.log($scope.input);
      //                }).error(function (data, status, headers, config) {
      //                    $scope.errorResponse = data;
      //                });
      //        };

      $scope.viewPurchaseReceipt = function() {
        $http({
          url: "report",
          method: "GET",
          headers: { "Content-Type": "application/json" }
        })
          .success(function(data, status, headers, config) {
            console.log($scope.purchaseReceipt);
            $scope.purchaseReceipt = data;
          })
          .error(function(data, status, headers, config) {
            $scope.errorResponse = data;
          });
      };

      $scope.loadCart = function() {
        $http({
          url: "viewcart",
          method: "GET",
          headers: { "Content-Type": "application/json" }
        })
          .success(function(data, status, headers, config) {
            console.log("test " + data);
            $scope.cartItems = data;
          })
          .error(function(data, status, headers, config) {
            $scope.errorResponse = data;
          });
      };

      $scope.viewPurchaseReceipt1 = function() {
        $http({
          url: "addcart/",
          method: "POST",
          body: "1 pills imported at 99.12",
          headers: { "Content-Type": "application/json" }
        })
          .success(function(data, status, headers, config) {
            $scope.purchaseReceipt = data;
            console.log($scope.purchaseReceipt);
          })
          .error(function(data, status, headers, config) {
            $scope.errorResponse = data;
          });
      };

      $scope.viewPurchaseReceipt3 = function() {
        $http({
          url: "deletecart/",
          method: "POST",
          body: "test",
          headers: { "Content-Type": "application/json" }
        })
          .success(function(data, status, headers, config) {
            console.log($scope.purchaseReceipt);
            $scope.purchaseReceipt = data;
          })
          .error(function(data, status, headers, config) {
            $scope.errorResponse = data;
          });
      };

      $scope.viewPurchaseReceipt2 = function() {
        $http({
          url: "home",
          method: "GET",
          headers: { "Content-Type": "application/json" }
        })
          .success(function(data, status, headers, config) {
            console.log($scope.purchaseReceipt);
            $scope.purchaseReceipt = data;
          })
          .error(function(data, status, headers, config) {
            $scope.errorResponse = data;
          });
      };

      $scope.loadShoppingBucket = function() {
        $http({
          url: "loadcart/" + $scope.shoppingBucket,
          method: "GET",
          headers: { "Content-Type": "application/json" }
        })
          .success(function(data, status, headers, config) {
            $scope.viewPurchaseReceipt();
          })
          .error(function(data, status, headers, config) {
            $scope.errorResponse = data;
          });
      };
      $scope.init();
    });
})();
