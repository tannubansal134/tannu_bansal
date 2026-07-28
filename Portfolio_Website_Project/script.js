// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Typing animation in hero section
const typingText = "Web Developer | Designer | Creator";
let i = 0;
function typingEffect() {
    if (i < typingText.length) {
        document.querySelector(".typing").textContent += typingText.charAt(i);
        i++;
        setTimeout(typingEffect, 100);
    }
}
document.querySelector(".typing").textContent = "";
typingEffect();

// Scroll reveal animations
const revealElements = document.querySelectorAll("section, .project, .skill, blockquote");
function revealOnScroll() {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add("reveal");
        }
    });
}
window.addEventListener("scroll", revealOnScroll);

// Dark mode toggle
const footer = document.querySelector("footer");
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "🌙 Toggle Dark Mode";
toggleBtn.style.marginTop = "10px";
toggleBtn.style.padding = "5px 10px";
toggleBtn.style.cursor = "pointer";
footer.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});