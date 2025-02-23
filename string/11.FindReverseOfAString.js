function FindReverseOfAString(str) {
  let reversedString = "";
  if (str.length === 0) return false;
  for (i = str.length-1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

const str = "Nishank is a Developer 12233 %^&^&";

const ReversedString = FindReverseOfAString(str);
console.log(ReversedString, "reversed String");
