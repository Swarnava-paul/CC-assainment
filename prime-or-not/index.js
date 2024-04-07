
let check_prime_or_not = function(number){

    let count=0;
    for(let i=1 ; i<=number;i++){
        if(number%i==0){
            count+=1
            console.log(`Devided by ${i}`);
        }
    }
    if(count==2){
        console.log(`Number ${number} is a Prime Number`);
    }else{
        console.log(`Number ${number} is a Non Prime Number`);
    }
}
check_prime_or_not(17)