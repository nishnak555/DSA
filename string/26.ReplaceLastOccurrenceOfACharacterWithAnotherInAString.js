function ReplaceLastOccurrenceOfACharacterWithAnotherInAString(str, replaceChar, newChar) {
    let found = false;
    let result = "";
  
   
    for (let i = str.length - 1; i >= 0; i--) {
      if (!found && str[i] === replaceChar) {
        result = newChar + result; 
        found = true;
      } else {
        result = str[i] + result;
      }
    }
  
    return result;
  }
  
  const str = "You are very good player, but you have to work hard very much";
  const replaceChar = "y";
  const newChar = "a";
  
  const finalResult = ReplaceLastOccurrenceOfACharacterWithAnotherInAString(str, replaceChar, newChar);
  console.log(finalResult);
  