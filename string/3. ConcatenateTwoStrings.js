function  ConcatenateTwoStrings(str1,str2){
    const finalStr = `${str1} ${str2}`
    return finalStr;
}
const str1 = "Nishank is a developer"
const str2  =  "Sandeep is a figma Designer"


const finalString = ConcatenateTwoStrings(str1,str2)

console.log(finalString,'final string')