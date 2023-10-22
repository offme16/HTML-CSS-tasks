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

function addPadding(string, minLength, addedCharacters) {
  while (string.length < minLength) {
    if (addedCharacters.length > minLength) {
      addedCharacters = addedCharacters.slice(0, minLength - 1);
      string = addedCharacters + string;
    } else {
      string =
        (addedCharacters + string).length <= minLength
          ? addedCharacters + string
          : addedCharacters.slice(
              0,
              (addedCharacters + string).length - minLength
            ) + string;
    }
  }
  return string;
}

console.log(addPadding("1", 2, "0")); // Выведет '01'
console.log(addPadding("1", 4, "0")); // Выведет '0001'
console.log(addPadding("q", 4, "werty")); // Выведет 'werq'
console.log(addPadding("q", 4, "we")); // Выведет 'wweq'
console.log(addPadding("qwerty", 4, "0")); // Выведет 'qwerty'

function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}
console.log(checkStringLength("проверяемая", 20)); // true
console.log(checkStringLength("проверяемая строка", 18)); // true
console.log(checkStringLength("проверяемая строка", 10)); // false
