function changeBg() {
    var navElement = document.querySelector("nav");
    if (this.scrollY > 20) {
        navElement.style.backgroundColor = "#fff";
        navElement.style.boxShadow = "0px 2px 5px rgba(0,0,0,0.1)";
        navElement.style.padding = "18px 0px"
    } else {
        navElement.style.backgroundColor = "transparent";
        navElement.style.boxShadow = "0px 2px 5px rgba(0,0,0,0)";
        navElement.style.padding = "30px 0px"
    }
}

window.addEventListener("scroll", changeBg, false)

//Navbar toggle

var navToggle = document.querySelector('#nav-toggle')
var btnAction = document.querySelector('#btn-action')
var btnBack = document.querySelector('#btn-back')
var screenSize = window.matchMedia("(min-width: 900px)")

function toggleAction(e) {
    if (e.id == "btn-action") {
        btnBack.style.display = "block"
        btnAction.style.display = "none";
        navToggle.style.transform = "translateX(0%)"
    }
    else {
        btnBack.style.display = "none"
        btnAction.style.display = "block";
        navToggle.style.transform = "translateX(-100%)"
    }
}

