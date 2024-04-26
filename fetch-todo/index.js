let url='https://jsonplaceholder.typicode.com/todos';

document.getElementById('button').addEventListener('click',async()=>{

    try{
        await fetch(url)
        .then(async(data)=>{
           await data.json()
           .then((data)=>{
             render_data(data)
           })
        })
    }catch(error){

    }
})

function c(tag){
return document.createElement(tag)
}// for creating elements with shorthand

const render_data = (data)=>{
let container=document.getElementById('container');

data.map(function(i){
let div=c('div');
let p=c('p');
let checkbox=c('input');
checkbox.setAttribute('type', 'checkbox');
p.innerHTML=i.title;
if(i.completed==true){
    checkbox.checked=true
};
div.append(p,checkbox)
container.append(div)
})

}