const sumAll = function(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR"
  } else if (a < 0 || b < 0) {
    return "ERROR"
  }
  sum = 0;
  lower = a;
  upper = b;
  if (a > b) {
    lower = b;
    upper = a;
  } else if (a === b){
    return a;
  }
  for (lower; lower <= upper; lower++) {
    sum += lower;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
