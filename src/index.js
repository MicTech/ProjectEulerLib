var isPrimeNumber = function(number) {
  var start = number - Math.floor(number / 2);

  for (start; start > 1; start--) {
    if (number % start === 0) {
      return false;
    }
  }

  return true;
};

module.exports = {
  isPrimeNumber: isPrimeNumber
};
