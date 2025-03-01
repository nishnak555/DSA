function RemoveAllRepeatedCharacterFromString(str) {
  let lowerStr = str.toLowerCase();
  let charCount = {};
  for (char of lowerStr) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  let result = "";
  for (char of lowerStr) {
    if (charCount[char] === 1) {
      result += char;
    }
  }
  return result;
}

const str = "You are very good player, but you have to work hard very much";

const finalResult = RemoveAllRepeatedCharacterFromString(str);
console.log(finalResult, "finalResult");
