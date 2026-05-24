const budgetForm =
document.getElementById("budgetForm");

budgetForm.addEventListener("submit", function(event){

    event.preventDefault();

    const destination =
    document.getElementById("destination").value;

    const days =
    parseInt(document.getElementById("days").value);

    const dailyBudget =
    parseInt(document.getElementById("dailyBudget").value);

    const totalCost = days * dailyBudget;

    document.getElementById("totalCost").textContent =
    `Estimated Cost: $${totalCost}`;

    let status = "";

    if(totalCost < 1000){

        status = "Low Budget Trip";

        document.getElementById("progress").style.width = "30%";

    }

    else if(totalCost < 3000){

        status = "Moderate Budget Trip";

        document.getElementById("progress").style.width = "60%";

    }

    else{

        status = "Luxury Budget Trip";

        document.getElementById("progress").style.width = "100%";

    }

    document.getElementById("budgetStatus").textContent =
    status;

    const tripData = {

        destination,
        days,
        dailyBudget,
        totalCost,
        status

    };

    localStorage.setItem(
        "tripBudget",
        JSON.stringify(tripData)
    );

});
