const trips = [

    "Maldives Adventure",
    "Paris Cultural Tour",
    "Tokyo Nature Escape",
    "Swiss Mountain Relaxation"

];

const generateBtn =
document.getElementById("generateBtn");

const tripResult =
document.getElementById("tripResult");

generateBtn.addEventListener("click", function(){

    const randomTrip =
    trips[Math.floor(Math.random() * trips.length)];

    tripResult.textContent = randomTrip;

});

const saveWishlist =
document.getElementById("saveWishlist");

saveWishlist.addEventListener("click", function(){

    const selectedTrip =
    tripResult.textContent;

    localStorage.setItem(
        "wishlistTrip",
        selectedTrip
    );

    alert("Trip saved to wishlist!");

});
