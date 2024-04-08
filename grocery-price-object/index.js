let data =[
    {name: "Rice", quantity: 2, price: 60},
    {name: "Dal", quantity: 3, price: 50},
    {name: "Salt", quantity: 1, price: 20}
]

let calcutale_price = (data)=>{

    let total=0
    let price_with_name= data.map(function(i){

        let net =0;
        net=(i.price*i.quantity)
        total+=net;
        return {name:i.name,totalprice:net}
    })
return `Total Price is ${total}`
}

console.log(calcutale_price(data))