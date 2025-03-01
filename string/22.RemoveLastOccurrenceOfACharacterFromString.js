function RemoveLastOccurrenceOfACharacterFromString(str, strToRemove) {
  let lowerStr = str.toLowerCase();
  let lowerStrToRemove = strToRemove.toLowerCase();
  let foundIndex = -1;
  for (let i = 0; i <= lowerStr.length - lowerStrToRemove.length; i++) {
    let found = true;
    for (let j = 0; j < lowerStrToRemove.length; j++) {
      if (lowerStr[i + j] !== lowerStrToRemove[j]) {
        found = false;
        break;
      }
    }
    if (found) {
      foundIndex = i;
    }
  }
  if (foundIndex === -1) return str;
  let newStr = "";
  for (let i = 0; i < foundIndex; i++) {
    newStr += str[i];
  }

  for (let j = foundIndex + strToRemove.length; j < str.length; j++) {
    newStr += str[j];   
  }
  return newStr;
}

const str = "You are very good player, but you have to work hard";
const strToRemove = "y";

const finalResult = RemoveLastOccurrenceOfACharacterFromString(
  str,
  strToRemove
);
console.log(finalResult, "finalResult");
