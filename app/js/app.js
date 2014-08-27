'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('wemet', [
  'ngRoute',
  'ngSanitize',
  'wemet.filters',
  'wemet.services',
  'wemet.directives',
  'wemet.controllers'
]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/index', {templateUrl: 'partials/index.html', controller: 'IndexCtrl'});
  $routeProvider.when('/igo', {templateUrl: 'partials/igo.html', controller: 'IgoCtrl'});
  $routeProvider.otherwise({redirectTo: '/index'});
}]);

app.run(function($rootScope) {
	$rootScope.serviceUrl = 'http://localhost:3000/api';
	$rootScope.user = '653604333';
});
