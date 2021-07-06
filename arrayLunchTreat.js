var names = ["Harsh","Dev","Marwah","Sakshi","Ishu","Ujjwal"];
var treatBy = () => {
    var who = Math.floor((Math.random()*(names.length)));
    console.log(`${names[who]} is going to give Treat Today`); 
    return 0;
}

treatBy();
treatBy();