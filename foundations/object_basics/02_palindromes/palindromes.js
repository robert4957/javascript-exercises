const palindromes = function (string) {
  let arr = string.toLowerCase().split("");
  arr = arr.filter((letter) => (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) || (letter.charCodeAt(0) >= 48 && letter.charCodeAt(0) <= 57))
  const arrOriginal = arr.slice();
  arr.reverse();
  const originalString = arrOriginal.join("");
  const revereseString = arr.join("");
  return (originalString === revereseString);
};

// Do not edit below this line
module.exports = palindromes;
