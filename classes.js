// classes : is a prgm code template for creating objects
// those obj vl have some state(variables) n fn inside it
class Car{
    constructor(brand){
        console.log("creating new obj")
         this.brandname=brand;
    }
    start(){
        console.log("stsrt")
    }
    stop(){
        console.log("stop")
    }
    // setbrand(brand){
    //     this.brandname=brand;
    //     // instead of brandname any name can be given even brand can also be given
    // }
}
// obj
let bmw=new Car(bmw);  //constructer vl invoke here as obj created
// bmw.setbrand("bmw");
let lexus=new Car(lexus); //constructer vl invoke here as obj created

// constructor method used in classes,automatically invoked by new

