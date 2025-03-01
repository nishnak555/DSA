function FindLastOccurrenceOfACharacterInAGivenString(str,strToFind){

    let strlength = str.length;
    let SearchLength = strToFind.length;
    let lastIndex = -1;

    for (let i = 0; i <= strlength - SearchLength; i++) {
      let found = true;
      for (let j = 0; j < SearchLength; j++) {
        if (str[i + j].toLowerCase() !== strToFind[j].toLowerCase()) {
          found = false;
          break;
        }
        if (found) {
            lastIndex = i; // Update last occurrence index
        }
      }
    }
    return lastIndex; 
}

const str = "You are very good player,but you very to work hard";
const strToFind = "y";

const finalResult = FindLastOccurrenceOfACharacterInAGivenString(
  str,
  strToFind
);

console.log(finalResult,'finalResult')