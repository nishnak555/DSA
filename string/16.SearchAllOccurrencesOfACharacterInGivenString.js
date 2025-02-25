function SearchAllOccurrencesOfACharacterInGivenString(str, strToFind) {
  let strlength = str.length;
  let SearchLength = strToFind.length;
  let countIndex = [];
  for (let i = 0; i <= strlength - SearchLength; i++) {
    let found = true;

    for (j = 0; j < SearchLength; j++) {
      if (str[i + j].toLowerCase() !== strToFind[j].toLowerCase()) {
        found = false;
      }
    }
    if (found) {
      countIndex.push(i);
    }
  }
  return countIndex;
}

const str = "You are very good player,but you very to work hard";
const strToFind = "you";

const finalResult = SearchAllOccurrencesOfACharacterInGivenString(
  str,
  strToFind
);

console.log(finalResult, "finalResult");
