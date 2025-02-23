function TotalNumberOfAlphabetsDigitsOrSpecialCharacterInAString() {
  let totalCount = {
    alphabets: 0,
    digits: 0,
    specialCharacter: 0,
  };

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
        // Skip spaces entirely
        continue;
      }
    if (/[a-zA-Z]/.test(str[i])) {
      totalCount.alphabets++;
    } else if (/[0-9]/.test(str[i])) {
      totalCount.digits++;
    } else  {
      
      totalCount.specialCharacter++;
    }
  }
  return totalCount;
}

const str = "Nishank is a developer 1324 @%&*%$";

const finalresult =
  TotalNumberOfAlphabetsDigitsOrSpecialCharacterInAString(str);

console.log(finalresult, "final result");
