const check_viowels = (string)=>{

    let viowels=['a','e','i','o','u'];

    let viowels_array=[...string].map(function(index){

    for(let i=0;i<viowels.length;i++){
        if(viowels[i]==index){
            return index;
        }
    }    
}).filter(d=>(
(d!=undefined)
))

return viowels_array.length;

}

console.log(check_viowels('This is a Ball , i play cricket and breathing oxygen , who are you'));