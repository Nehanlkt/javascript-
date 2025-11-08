// js object is entity having state and behaviour(prop n methods)
const student={
    name:"neha",
    age:21,
    // printage:function(){
    //     console.log("age:",this.age);
    // this.age refers to student.age
    // r 
     printage(){
        console.log("age:",this.age);
    },
};
// js has special property called prototype
const nn={
    salary:5,
};
// _ _proto_ _ to set prototype
// here used to get protype from student to nn
const nn2={
    salary:5,
};
const nn3={
    salary:5,
};
nn.__proto__=student;
nn2.__proto__=student;
nn3.__proto__=student;
// instead of writting that student fn again n again we can use like this

// if obj n prototype have same method,then obj method vl win

const emp={
    sal:10,
    printa(){
        console.log("ohh")
    },
};
const emp1={
    sal:10,
    printa(){
        console.log("oh hii")
    },
};
emp1.__proto__=emp;

