


document.getElementById('form').addEventListener('submit', handleForm);

window.addEventListener("load",function(){
    let storage =localStorage.getItem('details');
 
    if(storage!=null || storage !=undefined){
        storage=JSON.parse(localStorage.getItem('details'))
        travese_array(storage)
    }
})

function handleForm(event) {
    event.preventDefault();
    

    let formElements = document.querySelectorAll('input, select');
    let obj = {};

    formElements.forEach(function(element) {
        obj[element.id] = element.value;
    });


    let storage = localStorage.getItem('details');
    if(storage == undefined || storage == null){
      
        let ar=[]
        ar.push(obj)
        localStorage.setItem('details',JSON.stringify(ar))
        createElement(obj)
    }else{
        let storage = JSON.parse(localStorage.getItem('details'));
        storage.push(obj)
        localStorage.setItem('details',JSON.stringify(storage))
        createElement(obj)
    }
}

let travese_array = (arr) => {

    arr.forEach(function(i) {
      createElement(i)
    });
};

function createElement(i){
    let tr = document.createElement('tr');

    let name = document.createElement('td');
    let employeeId = document.createElement('td');
    let department = document.createElement('td');
    let exp = document.createElement('td');
    let email = document.createElement('td');
    let mobile = document.createElement('td');
    let role = document.createElement('td');

    name.innerHTML = i.name;
    employeeId.innerHTML = i.employeeID;
    department.innerHTML = i.department;
    exp.innerHTML = i.exp;
    email.innerHTML = i.email;
    mobile.innerHTML = i.mbl;

    if (parseInt(i.exp) >= 5) {
        role.innerHTML = 'Senior';
    } else if (parseInt(i.exp) <= 3) {
        role.innerHTML = 'Junior';
    } else {
        role.innerHTML = 'Fresher';
    }

    tr.append(name);
    tr.append(employeeId);
    tr.append(department);
    tr.append(exp);
    tr.append(email);
    tr.append(mobile);
    tr.append(role); 
    document.getElementById('tbody').append(tr);
    
}