

const getStarted = document.getElementById("getStarted");

getStarted.addEventListener("click", function () {

    alert("Welcome to FitZone! Let's start your fitness journey.");

});









    
const menuBtn = document.getElementById("menuBtn");
const sideNavbar = document.getElementById("side-navbar");
const closeBtn = document.getElementById("side-navbar-close");


menuBtn.addEventListener("click", function() {
    sideNavbar.classList.remove("-translate-x-full");
});


closeBtn.addEventListener("click", function() {
    sideNavbar.classList.add("-translate-x-full");
});








// BMI calculator

function calculateBMI() {

    var weight = Number(document.getElementById("weight").value);

    var height = Number(document.getElementById("height").value);

    var result = document.getElementById("result");


    // Check input values

    if (weight <= 0 || height <= 0 || !Number.isFinite(weight) || !Number.isFinite(height)) {

        result.innerHTML = "Please enter valid height and weight";

        return;
    }


    // Convert height into meters

    height = height / 100;


    // Calculate BMI

    var bmi = weight / (height * height);

    bmi = bmi.toFixed(1);


    // Find BMI category

    var category;

    if (bmi < 18.5) {

        category = "Underweight";

    }

    else if (bmi < 25) {

        category = "Normal Weight";

    }

    else if (bmi < 30) {

        category = "Overweight";

    }

    else {

        category = "Obesity";

    }


    // Display result

    result.innerHTML = `
        <h3>Your BMI: ${bmi}</h3>
        <p>Category: ${category}</p>
    `;

}
