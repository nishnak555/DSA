function ReverseOrderOfWordsInAGivenString(str) {
  let currentWord = "";
  let words = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "") {
      if (currentWord !== "") {
        words[words.length] = currentWord;
        currentWord = "";
      }
    } else {
      currentWord += str[i];
    }
  }

  if (currentWord !== "") {
    words[words.length] += currentWord;
  }

  let reversedString = "";
  for (let j = words.length; j >=0; j--) {
    reversedString += words[j];
    if (j >0) {
      // AAdd space after every word except the lastOne
      reversedString = "";
    }
  }

  return reversedString;
}

const str = "Nishank is a developer";
const finalResult = ReverseOrderOfWordsInAGivenString(str);
console.log(finalResult, "finalResult");
