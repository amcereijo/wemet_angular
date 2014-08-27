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
			}, 
			function(data, status, headers, config) {
				alert('error: '+data);
			}
		);

	$scope.getDate = function(date) {
		var datetime = new Date(date);
		//TODO change date format
		return datetime.getDate() + '/' + (datetime.getMonth()+1) +
			'/' + datetime.getFullYear();
	};
	$scope.getTime = function(date) {
		var datetime = new Date(date);
		return datetime.getHours() + ':' + datetime.getMinutes();
	};
	$scope.setResp = function(resp, igo) {
		igo.resp = resp;
		//call http
		IgosFactory.igo(igo._id, '/resp').update({resp:igo.resp}).$promise.then(
			function(data) {
				console.log('Update ok '+ data);
			},
			function(err) {
				alert('error: '+err)
			}
			);
		
	};
}]);