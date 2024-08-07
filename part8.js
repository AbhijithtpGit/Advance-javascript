
// media qurise 

const header =document.querySelector(".show");

// appinding hide methode in 767 px 

const devicewidth =window.matchMedia("(max-width:767px)");

// resize

function resize(){

    if(devicewidth.matches){
    header.classList.add("hide")
   }else{
    header.classList.remove("hide")
   }
}

// resize event

window.addEventListener("resize",resize);
console.log(innerHeight);

// toggle

const banner =document.querySelector(".banner");

banner.addEventListener("click",()=>{
    header.classList.toggle("hide")
});