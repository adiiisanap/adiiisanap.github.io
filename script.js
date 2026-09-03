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

        overview:
            "A real-time gas leakage detection and alert system designed to improve safety by continuously monitoring combustible gas concentration.",

        objective:
            "To detect gas leakage at an early stage and provide a quick warning using a sensor and embedded controller.",

        problem:
            "Gas leakage can create serious safety risks if it is not detected quickly. Manual monitoring is unreliable, so an automated detection system is required.",

        components: [
            "ESP32 Development Board",
            "MQ-4 Gas Sensor",
            "Buzzer",
            "LED Indicator",
            "Connecting Wires",
            "Power Supply"
        ],

        working:
            "The MQ-4 sensor continuously senses combustible gas concentration. The ESP32 reads the sensor output and processes the detected level. When the gas level crosses the defined threshold, the system activates an alarm to indicate a possible leakage.",

        applications: [
            "Home and kitchen safety",
            "Gas storage areas",
            "Industrial safety monitoring",
            "Laboratory environments",
            "IoT-based safety systems"
        ],

        futureScope: [
            "Cloud-based gas monitoring",
            "Mobile notification alerts",
            "Automatic gas valve control",
            "Data logging and analysis",
            "AI-based leakage prediction"
        ],

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

        overview:
            "An automated attendance management system that uses RFID technology to identify users through unique RFID tags and record attendance efficiently.",

        objective:
            "To develop an automated attendance system that reduces manual work and provides a faster and more reliable method of recording attendance.",

        problem:
            "Traditional attendance methods require manual entry and can consume time. An RFID-based system can automate identification and simplify the attendance process.",

        components: [
            "RFID Reader",
            "RFID Tags / Cards",
            "ESP32 / Microcontroller",
            "Buzzer",
            "LED Indicator",
            "Display / Serial Monitor",
            "Power Supply"
        ],

        working:
            "Each user is assigned a unique RFID tag. When the tag is placed near the RFID reader, the reader detects its unique identification number. The embedded controller processes the received ID and verifies the registered user. Once verified, attendance is recorded and the system provides an indication through the buzzer, LED, or display.",

        applications: [
            "College and school attendance",
            "Office employee attendance",
            "Laboratory access monitoring",
            "Training institutes",
            "Small-scale access control systems"
        ],

        futureScope: [
            "Cloud-based attendance storage",
            "Web-based attendance dashboard",
            "Mobile application integration",
            "Automatic attendance reports",
            "Biometric and RFID combination"
        ],

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

        overview:
            "An intelligent off-grid solar microgrid concept designed to monitor electrical parameters, detect abnormal operating conditions, identify potential faults, isolate the affected section, and restore power to healthy loads automatically.",

        objective:
            "To improve the reliability and continuity of solar power systems by combining embedded monitoring, AI-based fault detection, automatic fault isolation, and intelligent power restoration.",

        problem:
            "Faults in an off-grid solar microgrid can interrupt power to multiple loads. Conventional systems may require manual fault identification and restoration. An intelligent self-healing approach can reduce interruption and improve system reliability.",

        components: [
            "Solar PV Panel",
            "ESP32 Development Board",
            "Voltage Sensor",
            "Current Sensor",
            "Temperature Sensor",
            "Relay / Switching Circuit",
            "Battery Storage",
            "DC Loads",
            "Power Supply"
        ],

        working:
            "The solar PV system generates electrical power for the microgrid. Sensors continuously monitor parameters such as voltage, current, and temperature. The ESP32 collects and processes this information. AI/ML-based logic can identify abnormal patterns and predict possible faults. When a fault is detected, the controller isolates the affected section using intelligent switching. Healthy loads remain supplied, and the system attempts automatic restoration after the fault condition is cleared.",

        aiDetection:
            "The AI/ML layer can be trained using normal and abnormal operating data from the solar microgrid. By analysing sensor parameters and their patterns, the system can classify abnormal conditions and support predictive fault detection.",

        matlab:
            "MATLAB/Simulink can be used to model the solar PV system, simulate different fault conditions, analyse system behaviour, and develop or test the fault-detection logic before hardware implementation.",

        applications: [
            "Off-grid solar power systems",
            "Remote and rural electrification",
            "Solar-powered critical loads",
            "Smart energy management",
            "Microgrid reliability improvement"
        ],

        futureScope: [
            "Advanced AI-based predictive maintenance",
            "IoT cloud monitoring",
            "Mobile fault notifications",
            "Automatic battery health monitoring",
            "Advanced digital-twin simulation",
            "Integration with smart-grid technologies"
        ],

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

        overview:
            "A real-time GPS tracking system that uses an ESP32 microcontroller to receive location coordinates and display live tracking information through a web dashboard.",

        objective:
            "To develop a compact IoT-based location tracking system capable of collecting GPS coordinates and presenting the location information through an accessible web interface.",

        problem:
            "Monitoring the real-time location of a moving object requires continuous collection and transmission of position data. A low-cost ESP32 and GPS-based system can provide a practical solution for real-time tracking applications.",

        components: [
            "ESP32 Development Board",
            "GPS Module",
            "Antenna",
            "Wi-Fi Network",
            "Power Supply",
            "Web Dashboard"
        ],

        working:
            "The GPS module receives signals from navigation satellites and calculates the current latitude and longitude. The ESP32 reads the GPS data, processes the coordinates, and sends the location information through a wireless connection. The web dashboard receives the updated data and displays the current location for real-time monitoring.",

        gpsProcessing:
            "The GPS module provides data containing latitude, longitude, time, and other positioning information. The ESP32 extracts the required coordinates and processes them before sending the data to the monitoring dashboard.",

        dashboard:
            "The web dashboard provides a user-friendly interface for viewing live location information. It can display latitude, longitude, and other tracking parameters and can be extended to include a live map.",

        applications: [
            "Vehicle location tracking",
            "Asset monitoring",
            "IoT-based tracking systems",
            "Fleet monitoring",
            "Remote equipment tracking"
        ],

        futureScope: [
            "Live map integration",
            "Geofencing and location alerts",
            "GPS route history",
            "Mobile application integration",
            "Cloud-based location storage",
            "Battery monitoring and power optimisation"
        ],

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


function createList(items) {

    if (!items || !items.length) {
        return "";
    }

    return `
        <ul class="modal-list">
            ${items.map(item => `<li>${item}</li>`).join("")}
        </ul>
    `;

}


function createTech(items) {

    if (!items || !items.length) {
        return "";
    }

    return `
        <div class="modal-tech">
            ${items.map(item => `<span>${item}</span>`).join("")}
        </div>
    `;

}


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


    /*
       REMOVE OLD DETAILED CONTENT
       IF MODAL WAS OPENED BEFORE
    */

    const oldDetails =
        document.querySelector(".dynamic-modal-details");

    if (oldDetails) {
        oldDetails.remove();
    }


    /*
       CREATE DETAILED PROJECT INFORMATION
    */

    const details =
        document.createElement("div");

    details.className =
        "dynamic-modal-details";


    let content = "";


    if (project.overview) {

        content += `
            <div class="modal-section">
                <h3>
                    <i class="fa-solid fa-circle-info"></i>
                    Project Overview
                </h3>

                <p>
                    ${project.overview}
                </p>
            </div>
        `;

    }


    if (project.objective) {

        content += `
            <div class="modal-section">
                <h3>
                    <i class="fa-solid fa-bullseye"></i>
                    Objective
                </h3>

                <p>
                    ${project.objective}
                </p>
            </div>
        `;

    }


    if (project.problem) {

        content += `
            <div class="modal-section">
                <h3>
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Problem Statement
                </h3>

                <p>
                    ${project.problem}
                </p>
            </div>
        `;

    }


    if (project.components) {

        content += `
            <div class="modal-section">
                <h3>
                    <i class="fa-solid fa-microchip"></i>
                    Components Used
                </h3>

                ${createList(project.components)}
            </div>
        `;

    }


    if (project.working) {

        content += `
            <div class="modal-section">
                <h3>
                    <i class="fa-solid fa-gears"></i>
                    Working Principle
                </h3>

                <div class="modal-highlight">
                    <p>
                        ${project.working}
                    </p>
                </div>
            </div>
        `;

    }


    if (project.aiDetection) {

        content += `
            <div class="modal-section">
                <h3>
                    <i class="fa-solid fa-brain"></i>
                    AI / ML Fault Detection
                </h3>

                <p>
                    ${project.aiDetection}
                </p>
            </div>
        `;

    }


    if (project.matlab) {

        content += `
            <div class="modal-section">
                <h3>
                    <i class="fa-solid fa-chart-line"></i>
                    MATLAB / Simulink
                </h3>

                <p>
                    ${project.matlab}
                </p>
            </div>
        `;

    }


    if (project.gpsProcessing) {

        content += `
            <div class="modal-section">
                <h3>
                    <i class="fa-solid fa-location-crosshairs"></i>
                    GPS Coordinate Processing
                </h3>

                <p>
                    ${project.gpsProcessing}
                </p>
            </div>
        `;

    }


    if (project.dashboard) {

        content += `
            <div class="modal-section">
                <h3>
                    <i class="fa-solid fa-display"></i>
                    Web Dashboard
                </h3>

                <p>
                    ${project.dashboard}
                </p>
            </div>
        `;

    }


    if (project.features) {

        content += `
            <div class="modal-section">
                <h3>
                    <i class="fa-solid fa-star"></i>
                    Key Features
                </h3>

                ${createList(project.features)}
            </div>
        `;

    }


    if (project.applications) {

        content += `
            <div class="modal-section">
                <h3>
                    <i class="fa-solid fa-briefcase"></i>
                    Applications
                </h3>

                ${createList(project.applications)}
            </div>
        `;

    }


    if (project.futureScope) {

        content += `
            <div class="modal-section">
                <h3>
                    <i class="fa-solid fa-rocket"></i>
                    Future Scope
                </h3>

                ${createList(project.futureScope)}
            </div>
        `;

    }


    details.innerHTML =
        content;


    /*
       ADD DETAILS INSIDE MODAL
    */

    const modalDetails =
        document.querySelector(".modal-details");


    if (modalDetails) {

        modalDetails.insertAdjacentElement(
            "afterend",
            details
        );

    } else {

        modalDescription.insertAdjacentElement(
            "afterend",
            details
        );

    }


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


    const oldDetails =
        document.querySelector(".dynamic-modal-details");

    if (oldDetails) {
        oldDetails.remove();
    }

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
