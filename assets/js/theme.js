// script for dark and light theme button

const body = document.querySelector("body"),
modeToggle = body.querySelector(".toggle-icon");

let getMode = localStorage.getItem("mode");
if(getMode && getMode === "dark"){
    body.classList.toggle("dark");
} 

modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});