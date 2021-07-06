// function init(){
//     name ="Harsh Marwah";
//     function getName(){
//         console.log(name);
//     }
//     return getName; // Here we are returning reference of function
// }

// let result = init();
// result();


function doAdd(x){
    return function add(y){
        return x+y;
    }
}
let result = doAdd(4);
console.log(result(6));


// one more way of using is

console.log(doAdd(5)(6));