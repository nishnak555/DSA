const str1 = "Nishank";
const str2 = "NISHANK";

function CaseSensitiveCompareTwoStrings(str1, str2) {
  return str1 === str2;
}

const comparison = CaseSensitiveCompareTwoStrings(str1, str2);
console.log(comparison, "comparison");



//lowerCase
function toLowerCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i); // Get the AsCII code

    if (code >= 65 && code <= 90) {
      // upperCase character ranges 65 to 90 and convert it into lowerCase ,add 32 into it
      result += String.fromCharCode(code + 32);
    } else {
      result += str[i];
    }
  }
  return result;
}


// CaseInSensitiveCompareTwoStrings
function CaseInSensitiveCompareTwoStrings(str1, str2) {
  str1 = toLowerCase(str1);
  str2 = toLowerCase(str2);
  return str1 === str2;
}

const ComparisonCaseInsensitive = CaseInSensitiveCompareTwoStrings(str1, str2);

console.log(ComparisonCaseInsensitive, "comparisonCaseInsensitive");



//Lexicographical Comparison 

str1.localeCompare()// I wi;; come back to it

