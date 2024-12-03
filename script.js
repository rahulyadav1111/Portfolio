
var typed = new Typed('.multiple-text', {
    strings: ["MERN Stack Developer...","Typing Master..","Full Stack Web Developer"],
    typeSpeed: 100,
    loop:true
  });

//   about section start here

function toggleContent() {
    const content = document.getElementById("content");
    const button = document.getElementById("showMoreBtn");

    content.classList.toggle("expanded");

    if (content.classList.contains("expanded")) {
        button.textContent = "Show Less";
    } else {
        button.textContent = "Show More";
    }
}

// skills section start here

document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = "0";
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
});


// Contact js start here

// document.getElementById("contactForm").addEventListener("submit", function(event) {
//     event.preventDefault();  // Prevent the default form submission

//     // Form validation
//     const name = document.getElementById("name").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const subject = document.getElementById("subject").value.trim();
//     const message = document.getElementById("message").value.trim();

//     if (name && email && subject && message) {
//         // Mock submission
//         document.getElementById("statusMessage").textContent = "Thank you for your message!";
//         document.getElementById("statusMessage").style.color = "green";

//         // Clear the form
//         document.getElementById("contactForm").reset();
//     } else {
//         document.getElementById("statusMessage").textContent = "Please fill out all fields.";
//         document.getElementById("statusMessage").style.color = "red";
//     }
// });
