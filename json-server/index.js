
async function fetchData(){

    try{
      await fetch('http://localhost:3000/allUsersCart')
      .then(async(data)=>{
        await data.json()
        .then((data)=>{
          updateData(data)
        })
      })
    }catch(err){
        console.log(err);
    }
}

async function updateData(data){
    let newCart={

            title: "Nokia",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBkz2kjdQjM6DX7mLSYMtBrQMF_wRCFb-3cxwI5rPg1A&s",
            price: 18000,
            ratings: 5
    }
    let newarr=[
        ...data.Vijay,
        newCart
    ]
   data.Vijay=newarr;
   console.log(data);
 
   fetch('http://localhost:3000/allUsersCart',{
   method:'PATCH',
   headers:{
    'Content-Type':'application/json'
   },
   body:JSON.stringify(data)
})
}

fetchData()
