let followers = document.querySelector(".followers");
let paragraph = document.querySelector(".paragraph");
let count = 0;
setInterval(()=> {
if (count<1000){
    count++
    followers.innerText = count;
}
},1)

setTimeout(()=>{
    paragraph.innerText ="!!! yippe";
},1000)