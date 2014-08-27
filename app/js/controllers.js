'use strict';

/* Controllers */

var controllers = angular.module('wemet.controllers', []);

controllers.controller('IndexCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
}]);

controllers.controller('IgoCtrl', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
	$scope.igos = [];
	var urlIgos = $rootScope.serviceUrl+'/igo/user/'+$rootScope.user;
	$http({method: 'GET', isArray: true, url: urlIgos}).
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
		var target = angular.element($event.target),
			td = target.parent(),
			tr = td.parent();
		tr.removeClass('igo-yes').removeClass('igo-no').removeClass('igo-myb');
		switch(resp) {
			case 'yes': tr.addClass('igo-yes'); break;
			case 'no': tr.addClass('igo-no'); break;
			case 'myb': tr.addClass('igo-myb'); break;
		}
	};
}]);