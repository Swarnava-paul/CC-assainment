let small_case_or_not = (character)=>{

    if(character === character.toUpperCase()){
        return `${character} is Uppercase Letter`
    }
    else if(character === character.toLowerCase()){
        return `${character} is Lowercase Letter`
    }

}
console.log(small_case_or_not('S'));
