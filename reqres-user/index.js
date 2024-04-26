document.getElementById('userfetch').addEventListener('click',async()=>{

try{

    await fetch('https://reqres.in/api/users')
    .then(async(data)=>{
        await data.json()
        .then((data)=>{
            render_data_on_ui(data.data)
        })
    })

}catch(error){
console.log(error);
}
})

const render_data_on_ui=(data)=>{
let userdataholder=document.getElementById('userdataholder');
userdataholder.innerHTML="";

data.map(function(i){
    let div=document.createElement('div');
    let name=document.createElement('p');
    let email =document.createElement('p');
    let avatar=document.createElement('img');

   avatar.src=i.avatar;
   name.innerHTML=`${i.first_name} ${i.last_name}`
   email.innerHTML=i.email;
   div.append(name,email,avatar)
   userdataholder.append(div)
})

}