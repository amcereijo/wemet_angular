'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('wemet.services', ['ngResource'])
 	.value('version', '0.1')
	.factory('IgosFactory', function($resource, $rootScope){
	    return {
	        getIgos: function(){
	            return $resource($rootScope.serviceUrl+'/igo/user/'+$rootScope.user);
	        }
	    }               
	});
