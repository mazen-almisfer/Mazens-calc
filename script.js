// Define the values for each option
const optionValues = [0, 10, 11, 20, 21, 22];

// Variables to store selected values for X, Y, and Z
let xValue = 0;
let yValue = 0;
let zValue = 0;

// Array of placeholder images, update with your actual image paths if necessary
const images = [
    "img1.png", "img2.png", "img3.png",
    "img4.png", "img5.png", "img6.png"
];

// Function to create option buttons
function createOptions(containerId) {
    const container = document.getElementById(containerId);
    images.forEach((imgSrc, index) => {
        const option = document.createElement("div");
        option.classList.add("option");
        option.innerHTML = `<img src="${imgSrc}" alt="Option ${index + 1}"><p>${optionValues[index]}</p>`;
        option.onclick = () => selectOption(containerId, optionValues[index], option);
        container.appendChild(option);
    });
}

// Function to handle selection and update values
function selectOption(containerId, value, element) {
    // Remove the selected class from previously selected option
    const selected = document.querySelector(`#${containerId} .selected`);
    if (selected) selected.classList.remove("selected");

    // Add the selected class to the current option
    element.classList.add("selected");

    // Update corresponding value based on selected option
    if (containerId === "x-options") {
        xValue = value;
    } else if (containerId === "y-options") {
        yValue = value;
    } else if (containerId === "z-options") {
        zValue = value;
    }

    // Calculate results
    calculateResults();
}

// Function to calculate and display the results
function calculateResults() {
    // 1st Result Calculation
    var result1 = 2 * xValue + 11;
    
    // 2nd Result Calculation
    var result2 = (2 * zValue + yValue) - 5;
    
    // 3rd Result Calculation
    var result3 = Math.abs((yValue + zValue) - xValue);

// Format each result independently
const formatted1 = result1 < 10 ? ('0' + result1).slice(-2) : result1;
const formatted2 = result2 < 10 ? ('0' + result2).slice(-2) : result2;
const formatted3 = result3 < 10 ? ('0' + result3).slice(-2) : result3;

// Update the results in the HTML
document.getElementById("result1").textContent = formatted1;
document.getElementById("result2").textContent = formatted2;
document.getElementById("result3").textContent = formatted3;

    }

// Initialize options when the document is loaded
document.addEventListener("DOMContentLoaded", () => {
    createOptions("x-options");
    createOptions("y-options");
    createOptions("z-options");
});
