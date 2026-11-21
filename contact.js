 
 
 const menuBtn = document.getElementById("menuBtn");
        const sideNavbar = document.getElementById("side-navbar");
        const closeBtn = document.getElementById("side-navbar-close");

        menuBtn.addEventListener("click", function () {
            sideNavbar.classList.remove("-translate-x-full");
        });

        closeBtn.addEventListener("click", function () {
            sideNavbar.classList.add("-translate-x-full");
        });


        const contactForm = document.getElementById("contactForm");

        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            alert("Thank you for contacting FitZone! We will get back to you soon.");

            contactForm.reset();
        });