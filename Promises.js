const uno = () =>{
 return "I AM ONE";
}
// const dos = () => {
//     setTimeout(()=>{
//        return("I AM TWO")
//     },3000);
    
// }


const dos = () => {
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("I AM TWO");
     },3000);
   }
   ); 
}



const tres = () => {
    return "I AM THREE";
}
// here we have made asynchronus function by using async
const callAll= async () =>{
    
    let one = uno();
    console.log(one);

// here we using await keyword to say compiler wait wait wait here... 
//its necessary to execute then only we can ho ahead
    let two = await dos();
    console.log(two);
    
    let three = tres();
    console.log(three);
    
}
callAll();