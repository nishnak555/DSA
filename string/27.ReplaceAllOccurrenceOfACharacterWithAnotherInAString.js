function ReplaceAllOccurrenceOfACharacterWithAnotherInAString(
  str,
  replaceChar,
  newChar
) {
  let found = false;
  let result = "";
  for (i = 0; i < str.length; i++) {
    if (!found && str[i] === replaceChar) {
      result += newChar;
    } else {
      result += str[i];
    }
  }
  return result;
}

const str = "You are very good player, but you have to work hard very much";
const replaceChar = "y";
const newChar = "a";

const finalResult = ReplaceAllOccurrenceOfACharacterWithAnotherInAString(
  str,
  replaceChar,
  newChar
);
console.log(finalResult);
