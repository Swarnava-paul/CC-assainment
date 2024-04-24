
document.getElementById('select').addEventListener('change',sorting)
let fetchedData;
let allcountries;
async function fetchData(){
    try{
     let data= await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries')
     let data2 =await data.json()
     fetchedData=data2.data;
     display_data_on_ui(data2.data)
    }catch(err){
      console.log(err);
    }
}
fetchData()

function display_data_on_ui(data){
 let container = document.getElementById('container');
 container.innerHTML="";

 data.map(function(i){
    let div= document.createElement('div');
    let countryName= document.createElement('p');
    let id= document.createElement('p');
    let population = document.createElement('p');
    let rank = document.createElement('p');

    countryName.innerHTML=i.country;
    id.innerHTML=i.id;
    population.innerHTML=i.population;
    rank.innerHTML=i.Rank

    div.append(countryName,id,rank,population)

   container.append(div)
   })
}

function sorting(e){
    let data=fetchedData;
    if(e.target.value=='low-to-high'){
      let sorted=data.sort((a,b)=>a.population-b.population)
      display_data_on_ui(sorted)
    }else if(e.target.value=='high-to-low'){
        let sorted= data.sort((a,b)=>b.population-a.population)
        display_data_on_ui(sorted)
    }else{
    fetchData()
    }
}