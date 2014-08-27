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
  			if(igo.resp != 'yes') {
  				return "<button type=\"button\" ng-click=\"setResp($event, 'yes', igo)\" class=\"btn btn-success\"> Yes </button>";	
  			} else {
  				return ''
  			}
  			
  		}
  	};
  }])
  .filter('deleteOrNot', ['$rootScope', function($rootScope) {
  	return function(igo) {
  		if(igo.user === $rootScope.user) {
  			return "<a href=\"/delete\">Delete</a>";
  		}else {
  			if(igo.resp != 'no') {
  				return "<button ng-show=\"{{igo.resp!='no'}}\" type=\"button\" ng-click=\"setResp($event,'no', igo)\" class=\"btn btn-danger\"> No </button>";
  			} else {
  				return '';
  			}
  		}
  	};
  }])
  .filter('nothingOrMayBe', ['$rootScope', function($rootScope) {
  	return function(igo) {
  		if(igo.user === $rootScope.user) {
  			return "";
  		}else {
  			if(igo.resp != 'maybe') {
  				return "<button type=\"button\" ng-click=\"setResp($event, 'maybe', igo)\" class=\"btn btn-warning\"> ? </button>";
  			} else {
  				return '';
  			}
  		}
  	};
  }]);
