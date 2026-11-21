 
 
 const search = document.getElementById("search");
        const duration = document.getElementById("duration");
        const price = document.getElementById("price");

        const packages = document.querySelectorAll(".package");

        const count = document.getElementById("count");
        const noResults = document.getElementById("noResults");


        function filterPackages() {

            let visible = 0;

            packages.forEach(function (item) {

                const name = item.dataset.name;
                const months = item.dataset.duration;
                const amount = Number(item.dataset.price);

                const searchMatch = name.includes(search.value.toLowerCase());

                const durationMatch =
                    duration.value === "all" || months === duration.value;

                let priceMatch = true;

                if (price.value === "1000") {
                    priceMatch = amount < 1000;
                }

                else if (price.value === "3000") {
                    priceMatch = amount < 3000;
                }

                else if (price.value === "5000") {
                    priceMatch = amount < 5000;
                }

                else if (price.value === "5001") {
                    priceMatch = amount > 5000;
                }


                if (searchMatch && durationMatch && priceMatch) {

                    item.classList.remove("hidden");
                    visible++;

                } else {

                    item.classList.add("hidden");

                }

            });


            count.textContent = `Showing ${visible} packages`;

            noResults.classList.toggle("hidden", visible !== 0);

        }


        search.addEventListener("input", filterPackages);

        duration.addEventListener("change", filterPackages);

        price.addEventListener("change", filterPackages);


        document.getElementById("clear").addEventListener("click", function () {

            search.value = "";
            duration.value = "all";
            price.value = "all";

            filterPackages();

        });


        filterPackages();


        const menuBtn = document.getElementById("menuBtn");
const sideNavbar = document.getElementById("side-navbar");
const closeBtn = document.getElementById("side-navbar-close");

// Open Sidebar
menuBtn.addEventListener("click", function() {
    sideNavbar.classList.remove("-translate-x-full");
});

// Close Sidebar
closeBtn.addEventListener("click", function() {
    sideNavbar.classList.add("-translate-x-full");
});




var selectButtons = document.querySelectorAll(".select-plan");

selectButtons.forEach(function(button) {

    button.addEventListener("click", function() {

       
        selectButtons.forEach(function(btn) {
            btn.innerHTML = "Select Plan";
            btn.classList.remove("bg-green-600");
            btn.classList.add("bg-orange-500");
        });

        
        button.innerHTML = "Selected ✓";
        button.classList.remove("bg-orange-500");
        button.classList.add("bg-green-600");

    });

});
