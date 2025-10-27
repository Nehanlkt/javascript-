// function concat(adj,name,word){
//     console.log(adj+name+word)
// }

// concat("crazy","engine","bros")
// concat("amaz","garm","lim")
// concat("fir","food","hub")


let rand=Math.random()
if(rand<0.33){
    first="crazy"
}
else if(rand<0.66 && rand>=0.33){
    first="lov"
}
else{
    first="yaar"
}
rand=Math.random()
if(rand<0.33){
    second="cat"
}
else if(rand<0.66 && rand>=0.33){
    second="looo"
}
else{
    second="who"
}
rand=Math.random()
if(rand<0.33){
    third="cy"
}
else if(rand<0.66 && rand>=0.33){
    third="okaaa"
}
else{
    third="donne"
}

console.log(${first}${second}${third})