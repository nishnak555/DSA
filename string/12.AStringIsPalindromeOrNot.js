function AStringIsPalindromeOrNot(str) {
    str = str.toLowerCase(); //case Insensitive

    if (str.length ===  0) return true
  let IsPalindrome = false;
  let reversedString =''

for(let i = str.length -1 ;i >=0;i--){
    reversedString += str[i];

    
}

if(reversedString === str){
    IsPalindrome = true
}
  return IsPalindrome
}

const str = "Sos";
const IsPalindrome = AStringIsPalindromeOrNot(str);

console.log(IsPalindrome, "isPalindrome");
