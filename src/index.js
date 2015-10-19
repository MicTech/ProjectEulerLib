var isPrimeNumber = function(number) {
  var start = number - Math.floor(number / 2);

  for (start; start > 1; start--) {
    if (number % start === 0) {
      return false;
    }
  }

  return true;
};

var generateNumberSequence = function(start, end) {
  var numbers = [];

  for (var i = start; i < end + 1; i++) {
    numbers.push(i);
  }

  return numbers;
}

module.exports = {
  isPrimeNumber: isPrimeNumber,
  generateNumberSequence: generateNumberSequence
};
