function CountTotalNumberOfWordsInAString(){
let count =  0 ;
let InWord =  false

for(let i = 0 ; i<str.length;i++){
    let char =  str[i];
    if(char=== ' ' || char === '\t' || char === '\n'){
       InWord = false 
    } else{

        if(!InWord){
            count++
            InWord = true
        }
    }
}
return count

}

const str =  "Nishank is a developer 123 $%^^^&"
const finalCount  = CountTotalNumberOfWordsInAString(str)
console.log(finalCount,'final Count')