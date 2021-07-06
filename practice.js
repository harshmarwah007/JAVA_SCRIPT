let iAmGlobal = "Hey Global";
function A ()
{
    
    const iAmLocal = "Hey I am Local";
    iAmGlobal = "Harsh"
    console.log(iAmLocal);
    console.log(iAmGlobal)

}

console.log(iAmGlobal)
console.log(A.iAmLocal)


// function A()
// {
    
//     function B()
//     {
//         console.log("Hello")
//     }
// }

// A()();