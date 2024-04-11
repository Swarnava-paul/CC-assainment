const pets = ['cat', 'dog', 'bat'];

let Includes =(array,searchElement)=>{

    let filtered= array.filter(function(i){
        if(i==searchElement){
           return i
        }
    })

let retrn = (filtered==searchElement?true:false);
return retrn;

}


console.log(Includes(pets,'batgu'));