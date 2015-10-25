var isPrimeNumber = function(number) {
  var start = number - Math.floor(number / 2);

  for (start; start > 1; start--) {
    if (number % start === 0) {
      return false;
    }
  }

  return true;
};

var isPrimeNumberWithListOfPrimeNumbers = function(number, primeNumbers) {
  if(number === 2) {
    return true;
  }

  for (var i = 0; i < primeNumbers.length; i++) {
    if(number % primeNumbers[i] === 0) {
      return false;
    }
  }

  return true;
}

var generateNumberSequence = function(start, end) {
  var numbers = [];

  for (var i = start; i < end + 1; i++) {
    numbers.push(i);
  }

  return numbers;
}

module.exports = {
  isPrimeNumber: isPrimeNumber,
  isPrimeNumberWithListOfPrimeNumbers: isPrimeNumberWithListOfPrimeNumbers,
  generateNumberSequence: generateNumberSequence
};
