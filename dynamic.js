// still need to do
function createCard(title,cName,views,monthsold,duration,tumbnail){
    let views2
    if(views<100000){
        views2=views/1000+"K"
    }
    else if(views>1000000){
        views2=views/100000+"M"
    }
    else{
        views2=views/1000+"K"
    }
    let html=`<div class="card">
    <div class="image">
        <img src="https://i.ytimg.com/an_webp/KtL-SQ20Q0s/mqdefault_6s.webp?du=3000&sqp=CO3elcgG&rs=AOn4CLA8pC3LdGM-Ch0gfyJq8_ykqzQv8A">
        <div class="capsule"></div>
        </div>
        <div class="text">
            <h1>${title}</h1>
            <p>$(cName} . ${views2} views . 2months ago </p>'

}