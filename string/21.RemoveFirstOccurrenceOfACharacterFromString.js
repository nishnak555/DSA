function removeFirstOccurrence(str, strToRemove) {
    let lowerStr = str.toLowerCase();
    let lowerStrToRemove = strToRemove.toLowerCase();
    
    let foundIndex = -1;
    for (let i = 0; i <= lowerStr.length - lowerStrToRemove.length; i++) {
      let match = true;
      for (let j = 0; j < lowerStrToRemove.length; j++) {
        if (lowerStr[i + j] !== lowerStrToRemove[j]) {
          match = false;
          break;
        }
      }
      if (match) {
        foundIndex = i;
        break;
      }
    }

    if (foundIndex === -1) return str; // If substring not found, return original string
  
    let newStr = "";
    for (let i = 0; i < foundIndex; i++) {
      newStr += str[i];
    }
    for (let i = foundIndex + strToRemove.length; i < str.length; i++) {
      newStr += str[i];
    }
    
    return newStr;
  }
  
  const str = "You are very good player, but you very to work hard";
  const strToRemove = "you";
  
  const finalResult = removeFirstOccurrence(str, strToRemove);
  console.log(finalResult, "finalResult");
  