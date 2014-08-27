'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('wemet.services', ['ngResource'])
 	.value('version', '0.1')
	.factory('IgosFactory', function($resource, $rootScope){
	    return {
	        getIgos: function() {
	            return $resource($rootScope.serviceUrl+'/igo/user/'+$rootScope.user);
	        },
	        igo: function(id, urlAction) {
	        	var url = $rootScope.serviceUrl+'/igo/'+id+urlAction,
	        		params = {},
	        		options = { 'get':    {method:'GET'},
					    'remove': {method:'DELETE'},
					    'delete': {method:'DELETE'},
					    'update': {method: 'PUT'}
						};
	        	return $resource(url, params, options);
	        }
	    }               
	});
