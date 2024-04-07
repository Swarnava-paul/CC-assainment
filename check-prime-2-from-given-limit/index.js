let check_prime_2_from_given_limit = (limit)=>{
 
    let numbers=[]
    for(let i=2;i<=limit;i++){
     let f_check=check_prime_or_not(i);
     if(f_check != 0){
        numbers.push(f_check)
     }

    }
    console.log(`All primes numbers from ${2} to ${limit} are : ${numbers.join(',')}`);
}



let check_prime_or_not = function(number){

    let count=0;
    for(let i=1 ; i<=number;i++){
        if(number%i==0){
            count+=1
        }
    }
    if(count==2){
        return number;
    }else{
        return 0;
    }
 
}

check_prime_2_from_given_limit(90)