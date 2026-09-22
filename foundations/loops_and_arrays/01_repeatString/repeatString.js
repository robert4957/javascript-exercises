const repeatString = function(str, num) {
  if (num < 0) {
    return "ERROR";
  }
  newString = "";
  for (let i = 0; i < num; i++) {
    newString = newString.concat(str);
  }
  return newString;
};

// Do not edit below this line
module.exports = repeatString;
