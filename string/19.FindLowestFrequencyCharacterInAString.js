function FindLowestFrequencyCharacterInAString(str) {
  let CountMap = {};
  let leastchar = "";
  let leastCount = Infinity;
    str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") continue; // Ignore spaces if needed

    CountMap[str[i]] = (CountMap[str[i]] || 0) + 1;
    if (CountMap[str[i]] < leastCount) {
      leastCount = CountMap[str[i]];
      leastchar = str[i];
    }
  }

  return { CountMap, leastchar: leastchar };
}

const str = "You are very good player,but you very to work hard";

const finalResult = FindLowestFrequencyCharacterInAString(str);

console.log(finalResult, "finalResult");
