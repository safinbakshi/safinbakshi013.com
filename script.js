// Hide the emoji and speech bubble after 5 seconds
setTimeout(() => {
    document.getElementById('emoji-wrapper').style.display = 'none';
}, 5000);

setTimeout(() => {
    document.getElementById('intro-overlay').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
}, 5000);


document.addEventListener("DOMContentLoaded", function () {
    /* Smooth Scroll for Navigation Links */
    const navLinks = document.querySelectorAll(".nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });


    /* Typewriter Effect for Header */
    const headerText = " Hello! I’m Ahasanul Habib Safin, a dedicated student and a simple, down-to-earth individual who strives to learn, grow, and make an impact.";
    let i = 0;

    function typeWriter() {
        if (i < headerText.length) {
            document.querySelector(".header p").textContent += headerText.charAt(i);
            i++;
            setTimeout(typeWriter, 50); // Speed of typing
        }
    }
    typeWriter();

    /* Scroll Animation for Sections */
    const sections = document.querySelectorAll(".section");
    const options = {
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver(function (entries, sectionObserver) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                sectionObserver.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    /* Glowing Effect for Footer Text */
    const footerText = document.querySelector(".footer p");
    setInterval(() => {
        footerText.classList.toggle("glow");
    }, 2000); // Toggle every 2 seconds

    /* Back to Top Button */
    const backToTopButton = document.createElement("div");
    backToTopButton.classList.add("back-to-top");
    backToTopButton.innerHTML = "↑";
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });
});
