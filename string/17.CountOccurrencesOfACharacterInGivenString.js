function CountOccurrencesOfACharacterInGivenString(str, strToFind) {
  const strLength = str.length;
  const charLength = strToFind.length;
  str = str.toLowerCase();
  strToFind = strToFind.toLowerCase();
  let CountMap = {};
  for (let i = 0; i <= strLength - charLength; i++) {
    let found = true;

    for (let j = 0; j < charLength; j++) {
      if (str[i + j].toLowerCase() !== strToFind[j].toLowerCase()) {
        found = false;
        break;
      }
    }
    if (found) {
      CountMap[i] = strToFind;
    }
  }
  return CountMap;
}

const str = "You are very good player,but you very to work hard";
const strToFind = "you";

const finalResult = CountOccurrencesOfACharacterInGivenString(str, strToFind);

console.log(finalResult, "finalResult");
