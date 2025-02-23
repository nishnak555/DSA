function UppercaseStringToLowercase(str){
let result = "";
for(let i = 0 ; i < str.length ; i++){
let code =  str.charCodeAt(i)

if(code >=65  && code <= 90){
// str[i] is a upperCase

result+= String.fromCharCode(code+32);

}else{

    result+=str[i]
}

}
return result

}

 const str = "Nishank is a developer"
const LowercaseString = UppercaseStringToLowercase(str)

console.log(LowercaseString,'lowerCaseString')