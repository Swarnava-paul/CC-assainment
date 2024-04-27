
const apiUrl='https://fakestoreapi.com/products';
let globalData;
let filtereInterConnection;
const fetchData= async(apiUrl)=>{
try{
 await fetch(apiUrl)
 .then(async(data)=>{
   await data.json()
   .then((data)=>{
    globalData=data;
    filtereInterConnection=data;
    renderDataonUi(data)
})
 })
}catch(error){
 console.log(error);
}
}// fetch data from api end point

fetchData(apiUrl)

function create(tag){
    return document.createElement(tag)
}// for creating tag with shorthad function

function renderDataonUi(data){

  let container=document.getElementById('container');
  container.innerHTML='';
  data.map(function(i){

    let div=create('div');
    let img=create('img');
    let title=create('h2');
    let price=create('p');

    img.src=i.image;
    title.innerHTML=i.title;
    price.innerHTML=`Price ${i.price}`;
    div.append(img,title,price);
    container.append(div)
    
    
  })
}//receives data and create div ec.. and append on container

document.getElementById('filter-by-price').addEventListener('change',(e)=>{

if(e.target.value=='low-to-high'){
   let data=filtereInterConnection;
   data.sort((a,b)=>a.price-b.price)
   renderDataonUi(data)
}
else if(e.target.value=='high-to-low'){
    let data=filtereInterConnection;
   data.sort((a,b)=>b.price-a.price)
    renderDataonUi(data)  
}
else{
renderDataonUi(globalData)
}
}) // sort by price high to low or low to high completed

document.getElementById('searchbar').addEventListener('change',(e)=>{
 let data=[...globalData];
 let searchFilter= data.filter(i=>(
    i.title==e.target.value
 ))
if(searchFilter!=[]){
    renderDataonUi(searchFilter)
}
else if(searchFilter==[]){
    console.log('No results found');
}

})//search function based on title filter


document.getElementById('category-filter').addEventListener('change',(e)=>{

   
   let filteredByCategory=globalData.filter(function(i){
    if(i.category==e.target.value){
       return i
    }
   })
   filtereInterConnection=filteredByCategory;
renderDataonUi(filteredByCategory)
})// filter by category function