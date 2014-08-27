'use strict';

/* Controllers */

var controllers = angular.module('wemet.controllers', ['wemet.services']);

controllers.controller('IndexCtrl', ['$scope', function($scop) {
}]);

controllers.controller('IgoCtrl', ['$scope', 'IgosFactory',  
function($scope, IgosFactory) {
	$scope.igos = [];
	IgosFactory.getIgos().query().$promise.then(
			function(data, status, headers, config) {
				$scope.igos = data;
				console.log(data+", "+ status+", "+ headers+", "+ config);
			}, 
			function(data, status, headers, config) {
				alert('error: '+data);
			}
		);

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
	$scope.setResp = function($event, resp, igo) {
		var target = angular.element($event.target),
			td = target.parent(),
			tr = td.parent();
			console.log('igo:'+ igo.resp);
		igo.resp = resp;
		//call http
		tr.removeClass('igo-yes').removeClass('igo-no').removeClass('igo-myb');
		switch(resp) {
			case 'yes': tr.addClass('igo-yes'); break;
			case 'no': tr.addClass('igo-no'); break;
			case 'maybe': tr.addClass('igo-myb'); break;
		}
	};
}]);