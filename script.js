// ===============================
// Typing Effect
// ===============================

const typingText = document.getElementById("typing");

const words = [
    "Web Developer",
    "Frontend Developer",
    "Python Programmer",
    "Computer Science Student"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 70 : 120);
}

typeEffect();


// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close menu after click

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// ===============================
// Navbar Scroll Effect
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(15,23,42,0.95)";

        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.3)";

    } else {

        navbar.style.background =
            "rgba(15,23,42,0.8)";

        navbar.style.boxShadow = "none";
    }

});


// ===============================
// Back To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(
    ".project-card, .edu-card, .skill, .about-text"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const revealTop =
            element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.style.opacity = "1";
            element.style.transform =
                "translateY(0)";

        } else {

            element.style.opacity = "0";
            element.style.transform =
                "translateY(50px)";
        }

    });

}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// ===============================
// Contact Form Message
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert(
        "Thank you for contacting me! I will get back to you soon."
    );

    form.reset();

});


// ===============================
// Skill Bar Animation
// ===============================

const skillBars =
    document.querySelectorAll(".progress-bar");

function animateSkills() {

    skillBars.forEach(bar => {

        const width = bar.style.width;

        bar.style.width = "0";

        setTimeout(() => {
            bar.style.width = width;
            bar.style.transition =
                "width 2s ease";
        }, 300);

    });

}

window.addEventListener("load", animateSkills);


// ===============================
// Smooth Fade In Hero
// ===============================

window.addEventListener("load", () => {

    const hero =
        document.querySelector(".hero-content");

    hero.style.opacity = "0";
    hero.style.transform = "translateY(40px)";

    setTimeout(() => {

        hero.style.transition =
            "all 1.2s ease";

        hero.style.opacity = "1";
        hero.style.transform =
            "translateY(0)";

    }, 300);

});