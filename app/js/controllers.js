'use strict';

/* Controllers */

var controllers = angular.module('wemet.controllers', []);

controllers.controller('IndexCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
}]);

controllers.controller('IgoCtrl', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
	$scope.igos = [];
	console.log('calling ' + $rootScope.serviceUrl+'/igo');
	$http({method: 'GET', isArray: true, url: $rootScope.serviceUrl+'/igo'}).
		success(function(data, status, headers, config) {
			var i;
			$scope.igos = data;
		}).
		error(function(data, status, headers, config) {
			alert('error: '+data);
		});
	$scope.getDate = function(date) {
		var datetime = new Date(date);
		//TODO change date formatw
		return datetime.getDate() + '/' + (datetime.getMonth()+1) +
			'/' + datetime.getFullYear();
	};
	$scope.getTime = function(date) {
		var datetime = new Date(date);
		return datetime.getHours() + ':' + datetime.getMinutes();
	};
	$scope.setResp = function($event, resp) {
		debugger;
		var target = angular.element($event.target),
			td = target.parent(),
			tr = td.parent();
		switch(resp) {
			case 'yes': tr.css('background', 'green');  break;
			case 'no': tr.css('background', 'red');  break;
			case 'myb': tr.css('background', 'yellow');  break;
		}
	};
}]);