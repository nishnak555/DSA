function LowercaseStringToUppercase(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);

    if (code >= 97 && code <= 122) {
      // str[i] is lowerCase,convert it to uppercase
      result += String.fromCharCode(code - 32);
    } else {
      result += str[i];
    }
  }

  return result;
}

const str = "Nishank is a developer";

const UpperCaseString = LowercaseStringToUppercase(str);
console.log(UpperCaseString, "upperCase");
