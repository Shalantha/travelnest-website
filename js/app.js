const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

const destinations = [
    {
        name: "Maldives",
        description: "Beautiful beaches and luxury water villas."
    },

    {
        name: "Paris",
        description: "Romantic city filled with art and culture."
    },

    {
        name: "Tokyo",
        description: "Modern technology mixed with traditional beauty."
    },

    {
        name: "Switzerland",
        description: "Amazing mountains and peaceful landscapes."
    }
];

const today = new Date().getDate();

const selectedDestination = destinations[today % destinations.length];

document.getElementById("destination-name").textContent =
selectedDestination.name;

document.getElementById("destination-description").textContent =
selectedDestination.description;

const newsletterForm =
document.getElementById("newsletter-form");

if(newsletterForm){

    newsletterForm.addEventListener("submit", function(event){

        event.preventDefault();

        const email =
        document.getElementById("newsletter-email").value;

        localStorage.setItem("newsletterEmail", email);

        alert("Newsletter subscribed successfully!");

        newsletterForm.reset();

    });

}

// Loader

window.addEventListener("load", function(){

    const loader =
    document.querySelector(".loader");

    loader.style.display = "none";

});

// Back To Top Button

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }

    else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function(){

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// Scroll Reveal

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll", function(){

    reveals.forEach(reveal => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        reveal.getBoundingClientRect().top;

        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            reveal.classList.add("active");

        }

    });

});