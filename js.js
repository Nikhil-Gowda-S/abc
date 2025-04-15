// Countdown Timer
const eventDate = new Date("April 30, 2025 10:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `Event starts in: <b>${days}d ${hours}h ${minutes}m ${seconds}s</b>`;

    if (timeLeft < 0) {
        document.getElementById("countdown").innerHTML = "The event is live!";
    }
}

setInterval(updateCountdown, 1000);

// Registration Form Validation & Confirmation Message
document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const selectedEvent = document.getElementById("event").value;

    if (name && email) {
        document.getElementById("confirmation-message").innerHTML = `🎉 Thank you, <b>${name}</b>! You have registered for <b>${selectedEvent}</b>. Check your email for confirmation.`;
    } else {
        document.getElementById("confirmation-message").innerHTML = `⚠️ Please fill out all fields correctly.`;
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const targetSection = document.querySelector(this.getAttribute("href"));
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

// Animations on Scroll
const sections = document.querySelectorAll("section");

function revealSections() {
    sections.forEach(section => {
        const windowHeight = window.innerHeight;
        const sectionTop = section.getBoundingClientRect().top;
        const revealPoint = 150;

        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add("visible");
        } else {
            section.classList.remove("visible");
        }
    });
}

window.addEventListener("scroll", revealSections);
revealSections();  // Run on initial load