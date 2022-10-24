const menuIcon = document.querySelector(".toggle");
const mobileMenu = document.querySelector(".navMenu");

menuIcon.onclick = function(){
    if(mobileMenu.style.display != "block"){
        mobileMenu.style.display = "block";
        menuIcon.classList.replace("fa-bars", "fa-multiply")
    }
    else{
        mobileMenu.style.display = "none";
        menuIcon.classList.replace("fa-multiply", "fa-bars")
    }
}