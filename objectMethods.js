var user = {
    name : "Harsh ",
    coursList:[],
    buyCourse: function(course){
        this.coursList.push(course);
    },
    getCourseCount: function (){
        return `Student ${this.name} is enrolled in ${this.coursList.length} Courses `;
    }
};
user.buyCourse("A");
user.buyCourse("B");
user.buyCourse("C");
user.buyCourse("D");
console.log(user.coursList);
console.log(user.getCourseCount());