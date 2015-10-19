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

  describe('generateNumberSequence', function() {
    it('should return sequence with 11 elements from 5 to 15', function() {
      var sequence = projectEulerLib.generateNumberSequence(5, 15);

      expect(sequence.length).to.equal(11);
      expect(sequence).to.eql([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    });

    it('should return sequence with 10 elements from 1 to 10', function() {
      var sequence = projectEulerLib.generateNumberSequence(1, 10);

      expect(sequence.length).to.equal(10);
      expect(sequence).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
  });
});
