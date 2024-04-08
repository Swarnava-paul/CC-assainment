var sales = [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
  ]; //data


  let calculate_sales =(sales)=>{
    let array= sales.map(i=>(
        {
            item:i.item,
            original:i.original,
            sale:(i.discount >0?(i.original-(i.original*i.discount)).toFixed(3):i.original),
            stock:i.stock,
            total:(i.original*i.stock)
        }
    ))

    return array;
  }


console.log(calculate_sales(sales))

