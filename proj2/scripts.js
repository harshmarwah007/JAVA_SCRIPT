let red = document.querySelector(".red");
let cyan = document.querySelector(".cyan");
let violet = document.querySelector(".violet");
let orange = document.querySelector(".orange");
let pink = document.querySelector(".pink");

let center = document.querySelector(".center");
// console.log(window.getComputedStyle(red).getPropertyValue("background-color"));

var bgColor = (selectedElement) =>{
return getComputedStyle(selectedElement).getPropertyValue("background-color")
}

// let color = bgColor(orange);


// orange.addEventListener("mouseenter",()=>{
//     center.style.background = "green";
//     // console.log("mouse enter");
//     // center.classList.toggle("green");
// })
// pink.addEventListener("mouseenter",()=>{
//     center.style.background = "white";
//     // console.log("mouse enter");
//     // center.classList.toggle("green");
// })


// setTimeout(()=>{
    //     console.log("yes I am working!!");
    // },5000);

const changeColor= (element,color)=>{
   return element.addEventListener('mouseenter',()=>{
    center.style.background = color;
    })
}

changeColor(red,bgColor(red));
changeColor(cyan,bgColor(cyan));
changeColor(violet,bgColor(violet));
changeColor(pink,bgColor(pink));
changeColor(orange,bgColor(orange));