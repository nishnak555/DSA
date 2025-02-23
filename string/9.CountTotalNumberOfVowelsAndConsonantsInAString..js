const str = "Nishank is a Developer";

function CountTotalNumberOfVowelsAndConsonantsInAString() {
  let totalVowelConsonent = {
    vowel: 0,
    consonent: 0,
  };

  const lowerStr = str.toLowerCase();

  for (let i = 0; i < lowerStr.length; i++) {
    const char = lowerStr[i];

    if (char >= "a" && char <= "z") {
      if ("aeiou".includes(char)) {
        totalVowelConsonent.vowel++;
      } else {
        totalVowelConsonent.consonent++;
      }
    }
  }
  return totalVowelConsonent;
}

const totalCount = CountTotalNumberOfVowelsAndConsonantsInAString(str);

console.log(totalCount, "total Count");

//custom includes function
function findSubString(str, substr) {
  if (substr.length === 0) {
    return true; //always return true as per ECMA script specification
  }
  for (let i = 0; i < str.length - substr.length; i++) {  //
    let found = true;
    for (let j = 0; j < substr.length; j++) {
      if (str[i + j] !== substr[j]) {
        found = false;
        break;
      }
    }
    if (found) return true;

  }
  //if no match found
  return false
}

const str2 = 'Nishank'
const substr = 'Nis'
const found = findSubString(str2,substr)
console.log(found,'found') 