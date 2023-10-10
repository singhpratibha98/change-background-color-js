const button= document.querySelector("button");
const body= document.querySelector("body");
color= ["#610C9F", "#940B92", "#DA0C81", "#E95793", "#BEADFA",
"#D0BFFF", "#FFCF96", "#CD5C08","#176B87", "#64CCC5", "#BCA37F", "#D988B9", "#E9B824", "#D83F31", "#F4E869", "#3D0C11", "#82CD47", "#54B435", "#F0FF42", "#FF7396", "#06FF00"]

body.style.backgroundColor=""

button.addEventListener("click", function(){
    var index= parseInt(Math.random()*color.length)
    body.style.backgroundColor= color[index];
    
})