'use strict';

/* Controllers */

var controllers = angular.module('wemet.controllers', []);

controllers.controller('IndexCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
	console.log('$rootScope.serviceUrl' + $rootScope.serviceUrl);
}]);

controllers.controller('IgoCtrl', ['$scope', '$http', '$rootScope', '$log', function($scope, $http, $rootScope, $log) {
	$scope.igos = ['one', 'two'];
	$log.message ='calling ' + $rootScope.serviceUrl+'/igo';
	$http({method: 'GET', isArray: true, url: $rootScope.serviceUrl+'/igo'}).
		success(function(data, status, headers, config) {
			$scope.igos = data;
		}).
		error(function(data, status, headers, config) {
			alert('error: '+data);
		});
}]);