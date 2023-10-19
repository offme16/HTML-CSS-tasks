function isPalindrome(str) {
  str = str.replace(/\s/g, "").toLowerCase();
  return str === str.split("").reverse().join("");
}
console.log(isPalindrome("дед"));
console.log(isPalindrome("ИскАть таКси"));
console.log(isPalindrome("Крот"));

function extractDigits(str) {
  let digits = str.match(/\d/g);
  if (digits === null) {
    return NaN;
  }
  return parseInt(digits.join(""), 10);
}

console.log(extractDigits("2023 год"));
console.log(extractDigits("1 каштан, 0.5 банана"));
console.log(extractDigits("просто строка"));

function addPadding(str, minLength, padding) {
  if (str.length >= minLength) {
    return str;
  }

  let paddingCount = Math.ceil((minLength - str.length) / padding.length);

  let paddedString = padding.repeat(paddingCount) + str;

  if (paddedString.length > minLength) {
    paddedString = paddedString.slice(paddedString.length - minLength);
  }

  return paddedString;
}

console.log(addPadding("1", 2, "0"));
console.log(addPadding("1", 4, "0"));
console.log(addPadding("q", 4, "werty"));
console.log(addPadding("q", 4, "we"));
console.log(addPadding("qwerty", 4, "0"));

function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}
console.log(checkStringLength("проверяемая", 20)); // true
console.log(checkStringLength("проверяемая строка", 18)); // true
console.log(checkStringLength("проверяемая строка", 10)); // false
