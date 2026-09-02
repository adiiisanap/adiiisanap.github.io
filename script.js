/* =====================================================
   PORTFOLIO V2 JAVASCRIPT
===================================================== */


/* =====================================================
   TYPING ANIMATION
===================================================== */

const typingText = document.getElementById("typingText");

const roles = [
    "Embedded Developer",
    "Electrical Engineering Student",
    "IoT Enthusiast",
    "Problem Solver"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex =
                (roleIndex + 1) % roles.length;

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 45 : 90
    );

}

typeEffect();



/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.getElementById("navLinks");

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});


document.querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

        });

    });



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* =====================================================
   SKILL BAR ANIMATION
===================================================== */

const skillSection =
    document.getElementById("skills");

let skillsAnimated = false;

const skillObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting &&
                    !skillsAnimated
                ) {

                    skillsAnimated = true;

                    document
                        .querySelectorAll(".skill-bar span")
                        .forEach(bar => {

                            const width =
                                bar.dataset.width;

                            setTimeout(() => {

                                bar.style.width =
                                    width;

                            }, 200);

                        });

                }

            });

        },

        {
            threshold: 0.2
        }

    );

skillObserver.observe(skillSection);



/* =====================================================
   COUNTERS
===================================================== */

const counters =
    document.querySelectorAll(".counter");

let countersStarted = false;

const statsSection =
    document.querySelector(".stats-section");

const counterObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting &&
                    !countersStarted
                ) {

                    countersStarted = true;

                    counters.forEach(counter => {

                        const target =
                            Number(
                                counter.dataset.target
                            );

                        let current = 0;

                        const duration = 1200;

                        const startTime =
                            performance.now();

                        function updateCounter(
                            currentTime
                        ) {

                            const progress =
                                Math.min(
                                    (
                                        currentTime -
                                        startTime
                                    ) / duration,
                                    1
                                );

                            current =
                                Math.floor(
                                    progress * target
                                );

                            counter.textContent =
                                current;

                            if (progress < 1) {

                                requestAnimationFrame(
                                    updateCounter
                                );

                            } else {

                                counter.textContent =
                                    target;

                            }

                        }

                        requestAnimationFrame(
                            updateCounter
                        );

                    });

                }

            });

        },

        {
            threshold: 0.3
        }

    );

counterObserver.observe(statsSection);



/* =====================================================
   PROJECT DATA
===================================================== */

const projects = {

    gas: {

        category:
            "EMBEDDED + IoT",

        title:
            "Gas Leakage Alarm using MQ-4 Sensor",

        description:
            "An IoT-based gas leakage detection project using an MQ-4 sensor and ESP32 to detect combustible gases in real time.",

        technology:
            "ESP32 + MQ-4 Sensor",

        type:
            "Embedded / IoT",

        icon:
            "fa-fire-flame-simple",

        features: [

            "Uses an MQ-4 sensor for gas detection.",

            "ESP32 is used as the embedded controller.",

            "Designed for real-time detection of combustible gases.",

            "Combines sensor input with embedded processing.",

            "Demonstrates an IoT-oriented safety application."

        ]

    },


    rfid: {

        category:
            "EMBEDDED SYSTEM",

        title:
            "Attendance System using RFID Tags",

        description:
            "An RFID-based attendance system designed to automate attendance tracking by identifying unique RFID tags through a scanner.",

        technology:
            "RFID + Embedded System",

        type:
            "Automation",

        icon:
            "fa-id-card",

        features: [

            "Uses RFID tags containing unique identification.",

            "Scanner detects the RFID tag.",

            "Automates attendance tracking.",

            "Reduces the need for manual attendance entry.",

            "Demonstrates practical embedded-system automation."

        ]

    },


    solar: {

        category:
            "EMBEDDED + AI",

        title:
            "AI-Based Self-Healing Solar Microgrid",

        description:
            "Predictive fault detection with automatic fault isolation and power restoration for healthy loads.",

        technology:
            "ESP32 + MATLAB + AI/ML",

        type:
            "Solar Energy & Automation",

        icon:
            "fa-solar-panel",

        features: [

            "Monitors solar microgrid parameters using sensors.",

            "Detects abnormal conditions and predicts potential faults.",

            "Automatically isolates the faulty section.",

            "Restores power to healthy loads through intelligent switching.",

            "Designed for improved reliability of off-grid solar systems."

        ]

    },


    gps: {

        category:
            "EMBEDDED • IoT",

        title:
            "ESP32 GPS Live Location Tracker",

        description:
            "Real-time location tracking system using ESP32 and GPS with a web dashboard for monitoring live coordinates.",

        technology:
            "ESP32 + GPS",

        type:
            "IoT & Web Dashboard",

        icon:
            "fa-location-dot",

        features: [

            "Obtains real-time coordinates using a GPS module.",

            "Processes GPS data using ESP32.",

            "Sends live location data to a web dashboard.",

            "Displays latitude and longitude for monitoring.",

            "Demonstrates practical IoT-based location tracking."

        ]

    }

};




/* =====================================================
   PROJECT MODAL
===================================================== */

const modal =
    document.getElementById("projectModal");

const modalClose =
    document.getElementById("modalClose");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalCategory =
    document.getElementById("modalCategory");

const modalTech =
    document.getElementById("modalTech");

const modalType =
    document.getElementById("modalType");

const modalIcon =
    document.getElementById("modalIcon");

const modalFeatures =
    document.getElementById("modalFeatures");


function openProject(projectID) {

    const project =
        projects[projectID];

    if (!project) return;


    modalCategory.textContent =
        project.category;

    modalTitle.textContent =
        project.title;

    modalDescription.textContent =
        project.description;

    modalTech.textContent =
        project.technology;

    modalType.textContent =
        project.type;


    modalIcon.innerHTML =
        `<i class="fa-solid ${project.icon}"></i>`;


    modalFeatures.innerHTML = "";


    project.features.forEach(feature => {

        const li =
            document.createElement("li");

        li.textContent =
            feature;

        modalFeatures.appendChild(li);

    });


    modal.classList.add("active");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );

}


function closeProject() {

    modal.classList.remove("active");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );

}


document
    .querySelectorAll(".project-open")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                openProject(
                    button.dataset.project
                );

            }
        );

    });


modalClose.addEventListener(
    "click",
    closeProject
);


document
    .querySelector(".modal-overlay")
    .addEventListener(
        "click",
        closeProject
    );


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("active")
        ) {

            closeProject();

        }

    }
);



/* =====================================================
   BACK TO TOP
===================================================== */

const backTop =
    document.getElementById("backTop");

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 600) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    }
);


backTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );

const navItems =
    document.querySelectorAll(
        ".nav-link"
    );


const sectionObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const id =
                        entry.target.id;

                    navItems.forEach(link => {

                        link.classList.remove(
                            "active"
                        );

                        if (
                            link.getAttribute(
                                "href"
                            ) === `#${id}`
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    });

                }

            });

        },

        {
            rootMargin:
                "-35% 0px -55% 0px"
        }

    );


sections.forEach(section => {

    sectionObserver.observe(section);

});



/* =====================================================
   MOUSE GLOW
===================================================== */

const cursorGlow =
    document.querySelector(
        ".cursor-glow"
    );


document.addEventListener(
    "mousemove",
    event => {

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

    }
);



/* =====================================================
   PROJECT CARD TILT
===================================================== */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            if (
                window.innerWidth < 900
            ) return;


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;


            const rotateX =
                (y - centerY) / 30;

            const rotateY =
                (centerX - x) / 30;


            card.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform = "";

        }
    );

});



/* =====================================================
   HEADER SCROLL EFFECT
===================================================== */

const header =
    document.getElementById("header");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 50) {

            header.style.background =
                "rgba(6,7,8,0.92)";

        } else {

            header.style.background =
                "rgba(6,7,8,0.72)";

        }

    }
);
