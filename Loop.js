myStates =[
    "Goa",
    "Delhi",
    1234,
    "Haryana",
    "Punjab"
];
// we can directly get for loop by using extension so try to more that in the coding 

for (let index = 0; index < myStates.length; index++) {
        if( typeof myStates[index] !== 'string')
        continue;
        console.log(myStates[index]);
}
console.log(myStates.includes('Delhi'));