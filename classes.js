// classes : is a prgm code template for creating objects
// those obj vl have some state(variables) n fn inside it
class Car{
    start(){
        console.log("stsrt")
    }
    stop(){
        console.log("stop")
    }
    setbrand(brand){
        this.brandname=brand;
    }
}
// obj
let bmw=new Car();
bmw.setbrand("bmw");
let lexus=new Car();