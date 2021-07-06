const names = [
    "YouTube",
    "Facebook",
    "Instagram",
    "BecannyTuts",
];
const sites ={
    fb : "Facebook",
    ig : "Instagram",
    bt: "Becannytuts",
    yt: "Youtube",
}
// This osne is for each loop that we have used in java or 
//in other prorgamming languages
// ideally forEach loop is not a loop it is a method
names.forEach(s => console.log(s));

// For of loop used for

console.log("\nFOR OF LOOP\n");

for(const n of names){
    console.log(n);
}

// For in loop used for objects
console.log("\nFOR in LOOP\n");
for(const n in sites){
//    console.log(n); ---- prints only keys
    console.log(`Keys: ${n} and Values: ${sites[n]}`);
}