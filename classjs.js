class User{

    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    getUserInfo(){
        console.log(` 
        User Name : ${this.name}
        User Email : ${this.email}
        `)
    }
    courseList = [];
    enrolCourse(course){
        this.courseList.push(course);
    }
   /* static */ getCourseList(){
        return this.courseList;
    }
    login(){
        console.log("You are User");
    }

}

//module.exports = User;

class Manager extends User{
    
    constructor(){
        super(name,email);
    }
    login(){ //method over riding
        console.log("You are a Manager");
    }

}

let dev = new Manager( "dev","dev@.com");
dev.login();
dev.getCourseList(); // shows error as getCourseList is static it can not be inherited
console.log(dev);