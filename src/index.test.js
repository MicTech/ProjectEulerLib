var expect = require('chai').expect;
var projectEulerLib = require('./index');

describe('project-euler-lib', function() {
  describe('isPrimeNumber', function() {
    it('number 3 is a prime number', function() {
      expect(projectEulerLib.isPrimeNumber(3)).to.equal(true);
    });

    it('number 4 is not a prime number', function() {
      expect(projectEulerLib.isPrimeNumber(4)).to.equal(false);
    });

    it('number 103 is a prime number', function() {
      expect(projectEulerLib.isPrimeNumber(103)).to.equal(true);
    });

    it('number 222 is not a prime number', function() {
      expect(projectEulerLib.isPrimeNumber(222)).to.equal(false);
    });

    it('number 829 is a prime number', function() {
      expect(projectEulerLib.isPrimeNumber(829)).to.equal(true);
    })
  });
});
