function CopyOneStringToAnotherString(str){
    let str2 = " ";

 for(let i = 0 ; i<str.length ;i++ ){
    str2 += str[i]
 }
    return str2
}
const str1 = "Nishank is a developer"
const str2 = CopyOneStringToAnotherString(str1)

console.log(str2,'string copy')