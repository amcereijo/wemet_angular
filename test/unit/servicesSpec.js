'use strict';

/* jasmine specs for services go here */

describe('service', function() {

	beforeEach(module('wemet'));

	describe('version', function() {
		it('should return current version', inject(function(version) {
			expect(version).toEqual('0.1');
		}));
	});

	describe('IgosFactory', function() {
	  	it('check the existence factory', inject(function(IgosFactory) {
	    	expect(IgosFactory).toBeDefined();
	    }));
	    it('has method getIgos', inject(function(IgosFactory) {
	    	expect(IgosFactory.getIgos).toBeDefined();
	    }));
	    it('has method igo', inject(function(IgosFactory) {
	    	expect(IgosFactory.igo).toBeDefined();
	    }));
	});

});
