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
  			return "<span ng-click=\"setResp($event, 'yes')\"> Yes </span>";
  		}
  	};
  }])
  .filter('deleteOrNot', ['$rootScope', function($rootScope) {
  	return function(igo) {
  		if(igo.user === $rootScope.user) {
  			return "<a href=\"/delete\">Delete</a>";
  		}else {
  			return "<span ng-click=\"setResp($event,'no')\"> No </span>";
  		}
  	};
  }])
  .filter('nothingOrMayBe', ['$rootScope', function($rootScope) {
  	return function(igo) {
  		if(igo.user === $rootScope.user) {
  			return "";
  		}else {
  			return "<span ng-click=\"setResp($event, 'myb')\"> MayBe </span>";
  		}
  	};
  }]);
