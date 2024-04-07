
let rectangle =function(w,l,need='booth'){

    let ractangleobject ={
        width:w,
        length:l,

        area:function(){
            return (this.width*this.length);
        },
        perimeter:function(){
            return 2*(this.width*this.length)
        }
    }

    if(need=='area'){
        return `Area is : ${ractangleobject.area()}`
    }else if(need=='perimeter'){
        return `Perimeter is : ${ractangleobject.perimeter()}`
    }else if(need=='booth'){
        return (`Area is ${ractangleobject.area()} and Perimeter is ${ractangleobject.perimeter()}`);
    }
}

console.log(rectangle(12,10,'booth'));

// first parameter is width second is length and third is your need what you want to 
// calculate such as area or perimeter for area pass ="area" for perimeter pass ="perimeter"
// for booth calculation pass ="booth" or if you dont pass the default calculation is area