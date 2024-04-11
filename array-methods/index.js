let numbersArray = [2,3,7,8,10,13,15,18,34,25];

let doubledArray= numbersArray.map(i=>(
    i*2
))
console.log(doubledArray);


let evenNumbers = numbersArray.filter(i=>(
    (i%2==0)
))
console.log(evenNumbers);