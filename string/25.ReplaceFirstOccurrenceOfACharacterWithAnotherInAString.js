function ReplaceFirstOccurrenceOfACharacterWithAnotherInAString(
  str,
  replaceStr,
  newChar
) {
let lowerstr =  str.toLowerCase()
let lowerReplaceStr =  replaceStr.toLowerCase()
let lowerNewStr =  newChar.toLowerCase()
    let found =  false;
    let result = ""

 for(let i=0 ; i<lowerstr.length;i++ ){
    if(!found && lowerstr[i] === lowerReplaceStr  ){
        result+=lowerNewStr
        found =  true
    }else{
        result+=lowerstr[i]
    }

 }
 return result
}

const str = "You are very good player, but you have to work hard very much";
const replaceStr = "y";
const newChar = "a"

const finalResult = ReplaceFirstOccurrenceOfACharacterWithAnotherInAString(str, replaceStr,newChar);
console.log(finalResult, "finalResult");
