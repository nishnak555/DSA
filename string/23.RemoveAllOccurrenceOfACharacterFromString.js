function RemoveAllOccurrenceOfACharacterFromString(str, strToRemove) {
  let lowerStr = str.toLowerCase();
  let lowerStrToRemove = strToRemove.toLowerCase();

 let resultStr = "";
  for (let i = 0; i < lowerStr.length; i++) {
    let found = true;
    for (let j = 0; j < lowerStrToRemove.length; j++) {
      if (lowerStr[i + j] !== lowerStrToRemove[j]) {
        found = false;
      }
    }
    if (found) {
      i += lowerStrToRemove.length - 1;
    } else {
      resultStr += str[i];
    }
  }
  return resultStr
}

const str = "You are very good player, but you have to work hard";
const strToRemove = "you";

const finalResult = RemoveAllOccurrenceOfACharacterFromString(str, strToRemove);
console.log(finalResult, "finalResult");
