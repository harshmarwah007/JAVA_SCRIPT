const courses = [
{
    courseName: "React JS",
    price : 1000,
},
{
    courseName: "Vue JS",
    price : 500,
},
{
    courseName: "Angular JS",
    price : 300,
},
{ 
    courseName: "Flutter",
    price : 800,
},
];

function generateList(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML="";

    courses.forEach(course => {
        
        let li = document.createElement("li"); // creating element
        li.classList.add("list-group-item");// adding class
        
        let courseName = document.createTextNode(course.courseName); // creating text node
        li.appendChild(courseName);// appending node into element

        let span = document.createElement("span");
        span.classList.add("float-right");

        let price = document.createTextNode(course.price);
        span.appendChild(price);

        li.appendChild(span);
        
        ul.appendChild(li);
    });
    
}


window.addEventListener('load',generateList);
window.addEventListener('click',()=>{
    courses.sort((a,b) => (-a.price+b.price));// sorting
    generateList();
})