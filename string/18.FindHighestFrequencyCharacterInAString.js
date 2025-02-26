function FindHighestFrequencyCharacterInAString(str) {
  const strLength = str.length;
  let CountMap = {};
  let Maxcount = 0;
  let maxchar = "";
  str = str.toLowerCase();

  for (let i = 0; i < strLength; i++) {
    if (str[i] === " ") continue; // Ignore spaces if needed

    CountMap[str[i]] = (CountMap[str[i]] || 0 )+ 1;
    if (CountMap[str[i]] > Maxcount) {
      Maxcount = CountMap[str[i]];
      maxchar = str[i];
    }
  }
  return { CountMap, maxchar: maxchar };
}

const str = "You are very good player,but you very to work hard";

const finalResult = FindHighestFrequencyCharacterInAString(str);

console.log(finalResult, "finalResult");
