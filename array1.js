// First practice of checking this that array includes memeber or not

var name = prompt("Emter your name");
var guestNames = ["Harsh","Dev","Marwah","Sakshi","Ishu","Ujjwal"];
var invited = guestNames.includes(name);
if (invited){
    alert("Welcome you are invited");
}
else 
{
    alert("You are not invited, Sorry !!");

}
alert(guestNames)