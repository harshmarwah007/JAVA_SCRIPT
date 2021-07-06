//import User from './classjs';

const User = require('./classjs');

let harsh = new User("Harsh","harsh@gmail.com");

harsh.getUserInfo();
harsh.enrolCourse("React JS");
harsh.enrolCourse("Angular JS");
harsh.enrolCourse("Flutter");

let courses = harsh.getCourseList();
courses.forEach(e => console.log(e));
