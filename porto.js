 function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Animation au scroll
        window.addEventListener('scroll', () => {
            const elements = document.querySelectorAll('.skills-category, .experience-item,.about-text');
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;

                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('fade-in');
                }
            });
        });

        // Animation des barres de progression
        setTimeout(() => {
            const progressBars = document.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 500);
            });
        }, 1000);

        // Animation d'entrée
        window.addEventListener('load', () => {
            const heroElements = document.querySelectorAll('.hero .fade-in');
            heroElements.forEach((element, index) => {
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, index * 300);
            });
        });

// Burger menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});

        // Animation d'écriture et effacement
        const texts = {
            line1: ["ARNAUD ULRICH"],
            line2: ["DJOLLO AGUI"],
            subtitle: ["DÉVELOPPEUR D'APPLICATIONS"],
            status: ["Étudiant en Informatique chez AGITEL"]
        };

        const typingSpeed = 100;
        const erasingSpeed = 50;
        const delayBetweenTexts = 1500;

        function typeText(element, text, index, callback) {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                setTimeout(() => typeText(element, text, index + 1, callback), typingSpeed);
            } else {
                setTimeout(callback, delayBetweenTexts);
            }
        }

function eraseText(element, callback) {
            if (element.textContent.length > 0) {
                element.textContent = element.textContent.slice(0, -1);
                setTimeout(() => eraseText(element, callback), erasingSpeed);
            } else {
                setTimeout(callback, typingSpeed);
            }
        }

 function animateSequence() {
            const line1El = document.getElementById('line1');
            const line2El = document.getElementById('line2');
            const subtitleEl = document.getElementById('animated-subtitle');
            const statusEl = document.getElementById('animated-status');

            typeText(line1El, texts.line1[0], 0, () => {
                typeText(line2El, texts.line2[0], 0, () => {
                    typeText(subtitleEl, texts.subtitle[0], 0, () => {
                        typeText(statusEl, texts.status[0], 0, () => {
                            eraseText(statusEl, () => {
                                eraseText(subtitleEl, () => {
                                    eraseText(line2El, () => {
                                        eraseText(line1El, animateSequence);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }

        document.addEventListener('DOMContentLoaded', () => {
            animateSequence();
    });