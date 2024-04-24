

async function fetchData(){
    try{
     let data= await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries')
     let data2 =await data.json()
     display(data2.data)
    }catch(err){
      console.log(err);
    }
}
fetchData()

function display(data){
 asyncding(data)
}
 function asyncding(data){
   let sorted = data.sort((a,b)=>b.population-a.population)
   console.log(sorted);
 }