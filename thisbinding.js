const harsh ={
    firstname : "harsh",
    lastname :"Marwah",
    profile :"SD",
    coursecount : 5,
    getinfo : function(){
        console.log(`
        hey! ${this.firstname} ${this.lastname}
        your profile is ${this.profile}
        you are enrolled in ${this.coursecount}
        `);
    }

}
const dev = {
    firstname : "Dev",
    lastname: "Marwah",
    coursecount: 3,
    profile: "admin",
}
harsh.getinfo();
harsh.getinfo.bind(dev)();
var  devinfo = harsh.getinfo.bind(dev);
devinfo();
harsh.getinfo.call(dev);