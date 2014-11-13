'use strict'

var lib = require('../js/lib');

describe('lib', function() {
  describe('example_func', function() {
    it('should return 42', function() {
      expect(lib.example_func()).to.equal(42);
    });
  });
});
