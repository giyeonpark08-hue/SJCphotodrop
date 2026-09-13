const scriptURL = "https://script.google.com/macros/s/AKfycbxA_L3ZVWsICH7guD8VaFipoZxburVd8y1W4fIHDTgBcapWuiHjQjmUU0Laif7K7izq/exec";
const submitButton = document.getElementById("submitButton");

const consent = document.getElementById("consent");
const schoolUse = document.getElementById("schoolUse");

const photo = document.getElementById("photo");

const categoryOptions = document.querySelectorAll(
    'input[name="category"]'
);


/* =========================
   CATEGORY ELEMENTS
   ========================= */

const pepRally = document.getElementById("pepRally");
const pepRallyDetails = document.getElementById("pepRallyDetails");
const pepRallyType = document.getElementById("pepRallyType");

const dance = document.getElementById("dance");
const danceDetails = document.getElementById("danceDetails");
const danceType = document.getElementById("danceType");

const coffeeHouse = document.getElementById("coffeeHouse");
const coffeeHouseDetails = document.getElementById("coffeeHouseDetails");
const coffeeHouseType = document.getElementById("coffeeHouseType");

const sports = document.getElementById("sports");
const sportsDetails = document.getElementById("sportsDetails");

const fallSports = document.getElementById("fallSports");
const winterSports = document.getElementById("winterSports");
const springSports = document.getElementById("springSports");

const sportTypeDetails = document.getElementById("sportTypeDetails");
const sportType = document.getElementById("sportType");


/* =========================
   CATEGORY SELECTION
   ========================= */

categoryOptions.forEach(option => {

    option.addEventListener("change", function () {


        /* =========================
           PEP RALLY
           ========================= */

        if (pepRally.checked) {

            pepRallyDetails.style.display = "block";
            pepRallyType.required = true;

        } else {

            pepRallyDetails.style.display = "none";
            pepRallyType.required = false;
            pepRallyType.value = "";

        }


        /* =========================
           DANCE
           ========================= */

        if (dance.checked) {

            danceDetails.style.display = "block";
            danceType.required = true;

        } else {

            danceDetails.style.display = "none";
            danceType.required = false;
            danceType.value = "";

        }


        /* =========================
           COFFEE HOUSE
           ========================= */

        if (coffeeHouse.checked) {

            coffeeHouseDetails.style.display = "block";
            coffeeHouseType.required = true;

        } else {

            coffeeHouseDetails.style.display = "none";
            coffeeHouseType.required = false;
            coffeeHouseType.value = "";

        }


        /* =========================
           SPORTS
           ========================= */

        if (sports.checked) {

            sportsDetails.style.display = "block";

        } else {

            sportsDetails.style.display = "none";

            sportTypeDetails.style.display = "none";

            fallSports.checked = false;
            winterSports.checked = false;
            springSports.checked = false;

            sportType.required = false;
            sportType.value = "";

        }

    });

});


/* =========================
   SPORTS SEASON
   ========================= */

const seasonOptions = document.querySelectorAll(
    'input[name="sportsSeason"]'
);

seasonOptions.forEach(option => {

    option.addEventListener("change", function () {

        sportTypeDetails.style.display = "block";

        sportType.required = true;

    });

});


/* =========================
   SUBMIT
   ========================= */

submitButton.addEventListener("click", function () {


    /* CATEGORY CHECK */

    const selectedCategory = document.querySelector(
        'input[name="category"]:checked'
    );

    if (!selectedCategory) {

        alert("Please select a category.");

        return;

    }


    /* PEP RALLY CHECK */

    if (
        selectedCategory.value === "Pep Rally" &&
        pepRallyType.value === ""
    ) {

        alert("Please select which Pep Rally.");

        return;

    }


    /* DANCE CHECK */

    if (
        selectedCategory.value === "Dance" &&
        danceType.value === ""
    ) {

        alert("Please select which Dance.");

        return;

    }


    /* COFFEE HOUSE CHECK */

    if (
        selectedCategory.value === "Coffee House" &&
        coffeeHouseType.value === ""
    ) {

        alert("Please select which Coffee House.");

        return;

    }


    /* SPORTS CHECK */

    if (selectedCategory.value === "Sports") {

        const selectedSeason = document.querySelector(
            'input[name="sportsSeason"]:checked'
        );


        if (!selectedSeason) {

            alert("Please select a season.");

            return;

        }


        if (sportType.value === "") {

            alert("Please select which sport.");

            return;

        }

    }


    /* CONSENT CHECK */

    if (!consent.checked || !schoolUse.checked) {

        alert(
            "Please agree to both consent statements before submitting."
        );

        return;

    }


       /* PHOTO CHECK */

       if (photo.files[0].size > 10 * 1024 * 1024) {

    alert("Photo must be 10 MB or smaller.");

    return;

}

    if (photo.files.length === 0) {

        alert("Please upload a photo.");

        return;

    }


    /* =========================
       SEND SUBMISSION
       ========================= */

    const selectedSeason = document.querySelector(
        'input[name="sportsSeason"]:checked'
    );

    let subCategory = "";

    if (selectedCategory.value === "Pep Rally") {

        subCategory = pepRallyType.value;

    } else if (selectedCategory.value === "Dance") {

        subCategory = danceType.value;

    } else if (selectedCategory.value === "Coffee House") {

        subCategory = coffeeHouseType.value;

    } else if (selectedCategory.value === "Sports") {

        subCategory =
            selectedSeason.value + " - " + sportType.value;

    }


    /* PHOTO */

    const file = photo.files[0];

    const reader = new FileReader();


    reader.onload = function () {

        const submission = {

            category: selectedCategory.value,

            subCategory: subCategory,

            photoName: file.name,

            photoType: file.type,

            photoData: reader.result

        };


        fetch(scriptURL, {

            method: "POST",

            body: JSON.stringify(submission)

        })

       .then(() => {

    document.getElementById("successMessage").style.display = "block";

})

        .catch(error => {

            console.error(error);

            alert(
                "Something went wrong. Please try again."
            );

        });

    };


    reader.readAsDataURL(file);

});