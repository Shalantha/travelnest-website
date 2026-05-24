const feedbackForm =
document.getElementById("feedbackForm");

feedbackForm.addEventListener("submit", function(event){

    event.preventDefault();

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    const message =
    document.getElementById("message").value;

    const feedbackData = {

        name,
        email,
        message

    };

    localStorage.setItem(
        "feedback",
        JSON.stringify(feedbackData)
    );

    document.getElementById("feedbackMessage")
    .textContent =
    "Feedback submitted successfully!";

    feedbackForm.reset();

});

const questions =
document.querySelectorAll(".faq-question");

questions.forEach(question => {

    question.addEventListener("click", function(){

        const answer =
        this.nextElementSibling;

        if(answer.style.display === "block"){

            answer.style.display = "none";

        }

        else{

            answer.style.display = "block";

        }

    });

});