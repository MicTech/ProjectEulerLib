var isPrimeNumber = function(number) {
  for (var i = number - 1; i > 1; i--) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

module.exports = {
  isPrimeNumber: isPrimeNumber
};
