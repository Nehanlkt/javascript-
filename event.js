let bttn=document.getElementById("btn")

bttn.addEventListener("click",()=>{
    alert("i was clicked")
    document.querySelector(".box").innerHTML="<b> clicked </b> enjoy!"

})

// many more events search in google

bttn.addEventListener("contextmenu",()=>{
    alert("dont right click")
// if right click on btn

})


