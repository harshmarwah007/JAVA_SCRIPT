let myMaps = new Map();
myMaps.set('a','Harsh');
myMaps.set('b','Dev');
myMaps.set('c','Shyam');
myMaps.set('d','Hello');


myMaps.delete(1);
// console.log(myMaps);

for(let key of myMaps.keys()){
    console.log(key);
}

for(let values of myMaps.values()){
    console.log(values);
}
for (let [key,value] of myMaps){
    console.log(key +" :" +value);
}

myMaps.forEach((value)=>console.log(value))