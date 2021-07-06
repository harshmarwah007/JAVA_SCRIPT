let User = function(name,courseCount){
    this.name = name;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Number of Courses are ${this.courseCount}`);
    }
}

User.prototype.country ="India";
let harsh = new User("Harsh",2);
let dev = new User("Dev",3);

// console.log(dev);
// console.log(harsh);
// dev.getCourseCount();
//console.log(harsh.country);
User.hasOwnProperty("name");
