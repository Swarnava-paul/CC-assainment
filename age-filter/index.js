
let age_data=[
	{name: "Nrupul", age: 32},
	{name: "Prateek" , age: 30},
	{name: "Aman" , age: 26},
	{name: "Albert" , age: 28},
	{name: "Yogesh" , age: 44},
];

let filtered = age_data.filter(i=>(
    (i.age>30)
)).map(i=>(
    i.name
)).join(' , ')
console.log(filtered);