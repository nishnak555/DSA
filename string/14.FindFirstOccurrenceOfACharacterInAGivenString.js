function FindFirsOccurrenceOfACharacterInAGivenString(str, strToFind) {
  let strlength = str.length;
  let SearchLength = strToFind.length;

  for (let i = 0; i <= strlength - SearchLength; i++) {
    let found = true;
    for (let j = 0; j < SearchLength; j++) {
      if (str[i + j].toLowerCase() !== strToFind[j].toLowerCase()) {
        found = false;
        break;
      }
      if (found) {
        return i;
      }
    }
  }
  return -1; // if not found
}

const str = "You are very good player,but you very to work hard";
const strToFind = "are";

const finalResult = FindFirsOccurrenceOfACharacterInAGivenString(
  str,
  strToFind
);

console.log(finalResult,'finalResult')