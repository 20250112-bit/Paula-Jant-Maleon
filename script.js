
// Display the current year
let currentYear = new Date().getFullYear();

let yearElements = document.querySelectorAll("#year");

yearElements.forEach(function(element) {
    element.textContent = currentYear;
});


// Contact Form
let contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("name").value;

        document.getElementById("formMessage").textContent =
            "Thank you, " + name + "! Your message has been entered.";

        contactForm.reset();

    });

}
