// let returnedValue = Math.max(5,6,3,4,9,7,9);
// console.log(returnedValue);

// var myObj ={};
// Object.assign(myObj,{a:1,b:2,c:3},{x:4,y:6,z:8})
// console.log(myObj);


function add(x,y){
    return x+y;
}
let myvar = [2,4];
console.log(add(...myvar));// spread operator
//console.log(add(4,5));

function addmore(a,b,...args){ // rest operator
    let mul = a*b
    let sum = 0;
    for(let arg of args){
        sum = sum + arg;
    }
    return [mul,sum];
}

console.log(addmore(1,2,3,4,5,6,7,8,9));

