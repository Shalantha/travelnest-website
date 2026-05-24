const hamburger =
document.querySelector(".hamburger");

const navLinks =
document.querySelector(".nav-links");

if(hamburger){

    hamburger.addEventListener("click", function(){

        navLinks.classList.toggle("active");

    });

}

const currentPage =
window.location.pathname.split("/").pop();

const navLinksAll =
document.querySelectorAll(".nav-links a");

navLinksAll.forEach(link => {

    if(link.getAttribute("href") === currentPage){

        link.classList.add("active");

    }

});

const darkModeBtn =
document.getElementById("darkModeBtn");

if(localStorage.getItem("darkMode") === "enabled"){

    document.body.classList.add("dark-mode");

}

if(darkModeBtn){

    darkModeBtn.addEventListener("click", function(){

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){

            localStorage.setItem("darkMode", "enabled");

        }

        else{

            localStorage.setItem("darkMode", "disabled");

        }

    });
}
