'use strict';

/* Filters */

var getButtonContent = function(igoResp, response, classes) {  
	if (igoResp === response) { //option selected
  		classes += 'disabled';
  	}
	return '<button type="button" ng-click="setResp(\''+response+'\', igo)" class="'+classes+'"></button>';
};

angular.module('wemet.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }])
  .filter('editOrYes', ['$rootScope', function($rootScope) {
  	return function(igo) {
  		var classes = 'btn btn-success glyphicon glyphicon-thumbs-up ', 
  			content = (igo.user === $rootScope.user) ? '<a ng-href="#/edit">Edit</a>' : 
  				getButtonContent(igo.resp, $rootScope.responses.yes, classes);
  		return content;
  	};
  }])
  .filter('deleteOrNot', ['$rootScope', function($rootScope) {
  	return function(igo) {
  		var classes = 'btn btn-danger glyphicon glyphicon-thumbs-down ',
  			content = (igo.user === $rootScope.user) ? '<a ng-href="#/delete">Delete</a>' :
  				getButtonContent(igo.resp, $rootScope.responses.no, classes);
  		return content;
  	};
  }])
  .filter('nothingOrMayBe', ['$rootScope', function($rootScope) {
  	return function(igo) {
  		var classes = 'btn btn-warning glyphicon glyphicon-question-sign ',
  		content = (igo.user === $rootScope.user) ? '':getButtonContent(igo.resp, $rootScope.responses.maybe, classes);
  		return content;
  	};
  }]);
