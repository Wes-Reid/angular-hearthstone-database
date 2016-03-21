'use strict';

describe('hsdbApp.version module', function() {
  beforeEach(module('hsdbApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
