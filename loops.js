let a=1;
for (let i= 0; i < 10; i++) {
    console.log(a+i);

}

let obj={
    name:"neha",
    age:21,
    role:"developer",

}
// forin loop

for (const key in obj) {
    const element=obj[key];
    
    
    console.log(key,element)
    
    
}
// \for of
for (const c of "harry"){
    console.log(c)
}

let i=0;
while(i<6){
    console.log(i)
    i++;
}

// do while

let f=10;
do{
    console.log(f)
    f++;
}while(f<6);