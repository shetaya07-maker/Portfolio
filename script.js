
const words = ["Ahmed Shetaya — Front End Developer"];
const typingEl = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
    if (!typingEl) return;

    const currentWord = words[wordIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingEl.textContent = currentWord.substring(0, charIndex);

    let speed = isDeleting ? 60 : 110;

    if (!isDeleting && charIndex === currentWord.length) {
        speed = 1400;
        isDeleting = true;

    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 300;
    }

    setTimeout(typeLoop, speed);
}

if (typingEl) {
    typeLoop();
}


const menuBtn = document.getElementById("menuBtn");
const aside = document.querySelector(".aside");

if (menuBtn && aside) {

    menuBtn.addEventListener("click", () => {

        aside.classList.toggle("open");

        const icon = menuBtn.querySelector("i");

        if (aside.classList.contains("open")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });

    document.querySelectorAll(".aside nav a").forEach(link => {

        link.addEventListener("click", () => {

            aside.classList.remove("open");

            const icon = menuBtn.querySelector("i");

            icon.classList.add("fa-bars");
            icon.classList.remove("fa-xmark");
        });

    });
}

const navLinks = document.querySelectorAll(
    ".aside nav ul li a"
);

const sections = document.querySelectorAll(
    "main section[id]"
);

function setActiveLink() {
    let current = "";
    const scrollPos =
        window.scrollY + window.innerHeight / 3;
    sections.forEach(section => {
        if (scrollPos >= section.offsetTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active");
        }

    });
}

window.addEventListener(
    "scroll",
    setActiveLink
);

setActiveLink();
const contactForm =
    document.getElementById("contactForm");
const formStatus =
    document.getElementById("formStatus");
if (contactForm) {
    contactForm.addEventListener(
        "submit",
        function (e) {
            e.preventDefault();
            if (formStatus) {
                formStatus.textContent =
                    "Thanks! Your message has been noted. I'll get back to you soon.";
            }
            contactForm.reset();
        }
    );
}
const yearEl =
    document.getElementById("year");
if (yearEl) {
    yearEl.textContent =
        new Date().getFullYear();
}
const settingsBtn =
    document.getElementById("settingsBtn");
const settingsPanel =
    document.getElementById("settingsPanel");
const swatches =
    document.querySelectorAll(".swatch");
if (settingsBtn && settingsPanel) {
    settingsBtn.addEventListener(
        "click",
        () => {
            settingsPanel.classList.toggle(
                "open"
            );
            settingsBtn.classList.add(
                "spinning"
            );
            setTimeout(() => {
                settingsBtn.classList.remove(
                    "spinning"
                );
            }, 600);

        }
    );
    swatches.forEach(swatch => {
        swatch.addEventListener(
            "click",
            () => {
                const color =
                    swatch.getAttribute(
                        "data-color"
                    );
                document.documentElement.style.setProperty(
                    "--accent",
                    color
                );
                document.documentElement.style.setProperty(
                    "--accent-soft",
                    color + "1f"
                );
                swatches.forEach(s => {
                    s.classList.remove(
                        "active"
                    );
                });
                swatch.classList.add(
                    "active"
                );

            }
        );
    });
    document.addEventListener(
        "click",
        (e) => {

            if (
                !settingsPanel.contains(e.target) &&
                e.target !== settingsBtn &&
                !settingsBtn.contains(e.target)
            ) {

                settingsPanel.classList.remove(
                    "open"
                );
            }
        }
    );
}