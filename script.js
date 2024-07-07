const menu = document.querySelector(".hamburger")
const close = document.querySelector(".close")
const nav = document.querySelector(".nav-div")
const overlay = document.querySelector(".overlay")
menu.addEventListener("click",()=>{
//    nav.style.display="flex"
overlay.classList.add("active")
nav.style.transform="translateX(0%)"
})

close.addEventListener("click",()=>{
    // nav.style.display="none"
    overlay.classList.remove("active")
    nav.style.transform="translateX(100%)"
})