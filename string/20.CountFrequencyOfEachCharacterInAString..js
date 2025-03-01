function CountFrequencyOfEachCharacterInAString(str) {
  str = str.toLowerCase();
  let CountMap = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") continue;
    CountMap[str[i]] = (CountMap[str[i]] || 0) + 1;

  }
  return CountMap
}

const str = "You are very good player,but you very to work hard";

const finalResult = CountFrequencyOfEachCharacterInAString(str);

console.log(finalResult, "finalResult");
