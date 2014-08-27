'use strict';

/* Filters */

angular.module('wemet.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }])
  .filter('editOrYes', ['$rootScope', function($rootScope) {
  	return function(igo) {
  		if(igo.user === $rootScope.user) {
  			return "<a href=\"/edit\">Edit</a>";
  		}else {
  			return "<button type=\"button\" ng-click=\"setResp($event, 'yes')\" class=\"btn btn-success\"> Yes </button>";
  		}
  	};
  }])
  .filter('deleteOrNot', ['$rootScope', function($rootScope) {
  	return function(igo) {
  		if(igo.user === $rootScope.user) {
  			return "<a href=\"/delete\">Delete</a>";
  		}else {
  			return "<button type=\"button\" ng-click=\"setResp($event,'no')\" class=\"btn btn-danger\"> No </button>";
  		}
  	};
  }])
  .filter('nothingOrMayBe', ['$rootScope', function($rootScope) {
  	return function(igo) {
  		if(igo.user === $rootScope.user) {
  			return "";
  		}else {
  			return "<button type=\"button\" ng-click=\"setResp($event, 'myb')\" class=\"btn btn-warning\"> ? </button>";
  		}
  	};
  }]);
