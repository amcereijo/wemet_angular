'use strict';

/* jasmine specs for controllers go here */

ddescribe('controllers', function(){

  beforeEach(module('wemet'));//,['ngResource']));
  //beforeEach(module('wemet.controllers', ['wemet.services']));
  

  describe('IndexCtrl ', function() {
    it('should be defined', inject(function($controller) {
      //spec body
      var myCtrl1 = $controller('IndexCtrl', { $scope: {} });
      expect(myCtrl1).toBeDefined();
    }));
  });
  
  describe('IgoCtrl ', function() {
    it('should be defined', inject(function($controller) {
      var myCtrl1 = $controller('IgoCtrl', { $scope: {} });
      expect(myCtrl1).toBeDefined();
    }));
    it('has method getDate', inject(function($controller) {
      var scope = {},
        myCtrl1 = $controller('IgoCtrl', { $scope: scope });
      expect(scope.getDate).toBeDefined();
    }));
    it('has method getTime', inject(function($controller) {
      var scope = {},
        myCtrl1 = $controller('IgoCtrl', { $scope: scope });
      expect(scope.getTime).toBeDefined();
    }));
    it('has method setResp', inject(function($controller) {
      var scope = {},
        myCtrl1 = $controller('IgoCtrl', { $scope: scope });
      expect(scope.setResp).toBeDefined();
    }));
  });
  

});
