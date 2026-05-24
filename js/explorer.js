const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

    const searchValue =
    searchInput.value.toLowerCase();

    const filteredDestinations =
    destinations.filter(destination =>

        destination.name.toLowerCase()
        .includes(searchValue)

    );

    displayDestinations(filteredDestinations);

});

const destinations = [

    {
        name: "Maldives",
        country: "Asia",
        image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
        description: "Beautiful beaches and luxury resorts.",
        attractions: ["Beach Villas", "Scuba Diving", "Island Tours"],
        budget: "$3000"
    },

    {
        name: "Paris",
        country: "France",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
        description: "Romantic city filled with art and culture.",
        attractions: ["Eiffel Tower", "Louvre Museum", "River Cruise"],
        budget: "$2500"
    },

    {
        name: "Tokyo",
        country: "Japan",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
        description: "Modern city mixed with traditional beauty.",
        attractions: ["Shibuya", "Tokyo Tower", "Anime District"],
        budget: "$2800"
    },

    {
        name: "Switzerland",
        country: "Europe",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        description: "Amazing mountains and peaceful nature.",
        attractions: ["Alps", "Train Rides", "Lakes"],
        budget: "$3500"
    }
];

function displayDestinations(data){

    destinationCards.innerHTML = "";

    data.forEach(destination => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `

            <img src="${destination.image}" alt="">

            <div class="card-content">
                <h3>${destination.name}</h3>
                <p>${destination.country}</p>
            </div>

        `;

        card.addEventListener("click", function(){

            document.getElementById("modal").style.display = "flex";

            document.getElementById("modalTitle").textContent =
            destination.name;

            document.getElementById("modalDescription").textContent =
            destination.description;

            document.getElementById("modalBudget").textContent =
            destination.budget;

            const attractionsList =
            document.getElementById("modalAttractions");

            attractionsList.innerHTML = "";

            destination.attractions.forEach(attraction => {

                attractionsList.innerHTML +=
                `<li>${attraction}</li>`;

            });

        });

        destinationCards.appendChild(card);

    });
}

const closeBtn =
document.getElementById("closeBtn");

closeBtn.addEventListener("click", function(){

    document.getElementById("modal").style.display = "none";

});