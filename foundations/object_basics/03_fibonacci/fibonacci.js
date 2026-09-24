const fibonacci = function(index) {
  if (index < 0) {
    return "OOPS";
  }
  const fib = [0, 1];

  for (let i = 2; i <= index; i++) {
    fib.push(fib[i-1] + fib[i-2]);
  }

  return fib[index];

};

// Do not edit below this line
module.exports = fibonacci;
