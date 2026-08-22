/* =====================================================
   GLANCY CHEM BIO SOLUTIONS
   JAVASCRIPT
===================================================== */


/* ================= MOBILE MENU ================= */

const menuButton =
    document.getElementById("menuButton");

const navMenu =
    document.getElementById("navMenu");


if (menuButton && navMenu) {

    menuButton.addEventListener(
        "click",
        function () {

            navMenu.classList.toggle(
                "mobile-open"
            );

        }
    );


    const navLinks =
        document.querySelectorAll(".nav-link");


    navLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    navMenu.classList.remove(
                        "mobile-open"
                    );

                }
            );

        }
    );

}


/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll("section[id]");

const links =
    document.querySelectorAll(".nav-link");


window.addEventListener(
    "scroll",
    function () {

        let currentSection = "";

        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 150;

                const sectionHeight =
                    section.offsetHeight;


                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY <
                    sectionTop + sectionHeight
                ) {

                    currentSection =
                        section.getAttribute("id");

                }

            }
        );


        links.forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute("href") ===
                    "#" + currentSection
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);


/* ================= PRODUCT BUTTON ================= */

const productsMessageButton =
    document.getElementById(
        "productsMessageButton"
    );


if (productsMessageButton) {

    productsMessageButton.addEventListener(
        "click",
        function () {

            alert(
                "Our complete product range will be available soon. Please contact us for product enquiries."
            );

        }
    );

}


/* ================= SIMPLE SCROLL ANIMATION ================= */

const animatedElements =
    document.querySelectorAll(
        ".product-quality, .category-item, .gallery-card, .intro-highlight, .info-box"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


animatedElements.forEach(
    function (element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(20px)";

        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(element);

    }
);


/* ================= CONSOLE ================= */

console.log(
    "GLANCY CHEM BIO SOLUTIONS website loaded successfully."
);