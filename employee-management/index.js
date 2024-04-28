let globalData;
let filterInterConnection;
async function fetchData(){
    try{
     await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees')
     .then(async(data)=>{
        await data.json()
        .then((data)=>{
            globalData=data.data;
            filterInterConnection=data.data;
            renderData(data.data)
        })
     })
    }catch(error){
        console.log(error);
    }
}//fetches data
fetchData()

function create(tag){
    return document.createElement(tag)
}//creting elements shorthand function

function renderData(data){
let tbody=document.getElementById('tbody');
tbody.innerHTML='';
console.log(data);

data.map(function(i){
let tr=create('tr');
let sr_no=create('td');
let name=create('td');
let gender=create('td');
let department=create('td');
let salary=create('td');
sr_no.innerHTML=i.id;
name.innerHTML=i.name;
gender.innerHTML=i.gender;
department.innerHTML=i.department;
salary.innerHTML=i.salary;

tr.append(sr_no,name,gender,department,salary);
tbody.append(tr)

})


}//create ui

document.getElementById('filter-by-department').addEventListener('change',(e)=>{
let data=[...globalData];

let filteredData=data.filter(function(i){
    if(i.department==e.target.value){
        return i
    }
})
filterInterConnection=filteredData;
renderData(filteredData)
})//filter by department

document.getElementById('filter-by-gender').addEventListener('change',(e)=>{
 let data=[...filterInterConnection];
 let filteredData= data.filter(function(i){
    if(i.gender==e.target.value){
        return i
    }
 })
 renderData(filteredData)
})//flter by gender

document.getElementById('sort-by-salary').addEventListener('change',(e)=>{
    let data=[...filterInterConnection];

    
    if(e.target.value=='high-to-low'){
        let d=data.sort((a,b)=>b.salary-a.salary)
        renderData(d)
    }
    else{
        let d= data.sort((a,b)=>a.salary-b.salary)
        renderData(d)
    }
})