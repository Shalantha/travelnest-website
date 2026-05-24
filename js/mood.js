const beachAudio =
document.getElementById("beachAudio");

document.getElementById("beachSound")
.addEventListener("click", function(){

    beachAudio.play();

});

const forestAudio =
document.getElementById("forestAudio");

document.getElementById("forestSound")
.addEventListener("click", function(){

    forestAudio.play();

});

const cityAudio =
document.getElementById("cityAudio");

document.getElementById("citySound")
.addEventListener("click", function(){

    cityAudio.play();

});

document.getElementById("saveVisited")
.addEventListener("click", function(){

    const visitedPlace =
    document.getElementById("visitedPlace").value;

    localStorage.setItem(
        "visitedDestination",
        visitedPlace
    );

    document.getElementById("savedMessage").textContent =
    "Destination saved successfully!";

});
