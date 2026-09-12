const submitButton = document.getElementById("submitButton");
const consent = document.getElementById("consent");
const category = document.getElementById("category");
const description = document.getElementById("description");
const photo = document.getElementById("photo");

submitButton.addEventListener("click", function () {

    if (category.value === "") {
        alert("Please select a category.");
        return;
    }

    if (description.value.trim() === "") {
        alert("Please enter a description.");
        return;
    }

    if (!consent.checked) {
        alert("Please agree before submitting.");
        return;
    }

    if (photo.files.length === 0) {
        alert("Please upload a photo.");
        return;
    }

    alert("Submission received!");

});