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
  			return "<a ng-href=\"/edit\">Edit</a>";
  		}else {
  			if(igo.resp === 'yes') {
  				return "<button type=\"button\" ng-click=\"setResp('yes', igo)\" class=\"btn btn-success disabled glyphicon glyphicon-thumbs-up\"></button>";
  			} else {
  				return "<button type=\"button\" ng-click=\"setResp('yes', igo)\" class=\"btn btn-success glyphicon glyphicon-thumbs-up\"></button>";
  			}
  			
  		}
  	};
  }])
  .filter('deleteOrNot', ['$rootScope', function($rootScope) {
  	return function(igo) {
  		debugger;
  		if(igo.user === $rootScope.user) {
  			return "<a ng-href=\"/delete\">Delete</a>";
  		}else {
  			if(igo.resp === 'no') {
  				return "<button type=\"button\" ng-click=\"setResp('no', igo)\" class=\"btn btn-danger disabled glyphicon glyphicon-thumbs-down\"></button>";
  			} else {
  				return "<button type=\"button\" ng-click=\"setResp('no', igo)\" class=\"btn btn-danger glyphicon glyphicon-thumbs-down\"></button>";
  			}
  		}
  	};
  }])
  .filter('nothingOrMayBe', ['$rootScope', function($rootScope) {
  	return function(igo) {
  		if(igo.user === $rootScope.user) {
  			return "";
  		}else {
  			if(igo.resp === 'maybe') {
  				return "<button type=\"button\" ng-click=\"setResp('maybe', igo)\" class=\"btn btn-warning disabled glyphicon glyphicon-question-sign\"></button>";
  			} else {
  				return "<button type=\"button\" ng-click=\"setResp('maybe', igo)\" class=\"btn btn-warning glyphicon glyphicon-question-sign\"></button>";
  			}
  		}
  	};
  }]);
