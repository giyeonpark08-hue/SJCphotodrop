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

const sportDivisionDetails =
    document.getElementById("sportDivisionDetails");

const fallSports = document.getElementById("fallSports");
const winterSports = document.getElementById("winterSports");
const springSports = document.getElementById("springSports");

const juniorSports = document.getElementById("juniorSports");
const seniorSports = document.getElementById("seniorSports");
const otherSports = document.getElementById("otherSports");

const sportTypeDetails =
    document.getElementById("sportTypeDetails");

const sportType =
    document.getElementById("sportType");


/* =========================
   SPORTS SEASON OPTIONS
   ========================= */

const seasonOptions = document.querySelectorAll(
    'input[name="sportsSeason"]'
);

const divisionOptions = document.querySelectorAll(
    'input[name="sportsDivision"]'
);


/* =========================
   SPORTS LISTS
   ========================= */

const sportsBySeason = {

    Fall: {

        Junior: [
            "Boys Basketball",
            "Girls Basketball",
            "Boys Volleyball",
            "Girls Volleyball",
            "Boys Football"
        ],

        Senior: [
            "Boys Basketball",
            "Girls Basketball",
            "Boys Volleyball",
            "Girls Volleyball",
            "Boys Football"
        ]

    },


    Winter: {

        Junior: [
            "Boys Basketball",
            "Girls Basketball",
            "Boys Volleyball",
            "Girls Volleyball",
            "Badminton"
        ],

        Senior: [
            "Boys Basketball",
            "Girls Basketball",
            "Boys Volleyball",
            "Girls Volleyball",
            "Badminton"
        ]

    },


    Spring: {

        Junior: [
            "Boys Rugby"
        ],

        Senior: [
            "Boys Rugby"
        ]

    }

};


/* =========================
   SPORTS WITHOUT
   JUNIOR / SENIOR
   ========================= */

const otherSportsBySeason = {

    Fall: [
        "Cross Country",
        "Golf",
        "Tennis",
        "Boys Baseball",
        "Girls Fast Pitch",
        "Girls Field Hockey",
        "Girls Rugby 7s",
        "Girls Flag Football"
    ],


    Winter: [
        "Wrestling",
        "Boys Hockey",
        "Girls Hockey",
        "Swimming",
        "Curling"
    ],


    Spring: [
        "Girls Rugby",
        "Boys Soccer",
        "Girls Soccer",
        "Boys Lacrosse",
        "Ultimate",
        "Track and Field"
    ]

};


/* =========================
   CATEGORY SELECTION
   ========================= */

categoryOptions.forEach(option => {

    option.addEventListener("change", function () {


        /* PEP RALLY */

        if (pepRally.checked) {

            pepRallyDetails.style.display = "block";
            pepRallyType.required = true;

        } else {

            pepRallyDetails.style.display = "none";
            pepRallyType.required = false;
            pepRallyType.value = "";

        }


        /* DANCE */

        if (dance.checked) {

            danceDetails.style.display = "block";
            danceType.required = true;

        } else {

            danceDetails.style.display = "none";
            danceType.required = false;
            danceType.value = "";

        }


        /* COFFEE HOUSE */

        if (coffeeHouse.checked) {

            coffeeHouseDetails.style.display = "block";
            coffeeHouseType.required = true;

        } else {

            coffeeHouseDetails.style.display = "none";
            coffeeHouseType.required = false;
            coffeeHouseType.value = "";

        }


        /* SPORTS */

        if (sports.checked) {

            sportsDetails.style.display = "block";

        } else {

            sportsDetails.style.display = "none";

            sportDivisionDetails.style.display = "none";

            sportTypeDetails.style.display = "none";

            seasonOptions.forEach(option => {
                option.checked = false;
            });

            divisionOptions.forEach(option => {
                option.checked = false;
            });

            sportType.value = "";

        }

    });

});


/* =========================
   SPORTS SEASON
   ========================= */

seasonOptions.forEach(option => {

    option.addEventListener("change", function () {

        sportDivisionDetails.style.display = "block";

        sportTypeDetails.style.display = "none";

        divisionOptions.forEach(option => {
            option.checked = false;
        });

        sportType.innerHTML = `
            <option value="">
                Select which sport
            </option>
        `;

    });

});


/* =========================
   SPORTS LEVEL
   ========================= */

divisionOptions.forEach(option => {

    option.addEventListener("change", function () {

        const selectedSeason = document.querySelector(
            'input[name="sportsSeason"]:checked'
        );

        if (!selectedSeason) {
            return;
        }


        /* RESET SPORT LIST */

        sportType.innerHTML = `
            <option value="">
                Select which sport
            </option>
        `;


        /* OTHER */

        if (this.value === "Other") {

            otherSportsBySeason[selectedSeason.value].forEach(
                sport => {

                    const optionElement =
                        document.createElement("option");

                    optionElement.value = sport;

                    optionElement.textContent = sport;

                    sportType.appendChild(optionElement);

                }
            );


        /* JUNIOR / SENIOR */

        } else {

            sportsBySeason[selectedSeason.value][this.value].forEach(
                sport => {

                    const optionElement =
                        document.createElement("option");

                    optionElement.value =
                        this.value + " " + sport;

                    optionElement.textContent =
                        this.value + " " + sport;

                    sportType.appendChild(optionElement);

                }
            );

        }


        sportTypeDetails.style.display = "block";

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

    let subCategory = "";

    if (selectedCategory.value === "Sports") {

        const selectedSeason = document.querySelector(
            'input[name="sportsSeason"]:checked'
        );

        const selectedDivision = document.querySelector(
            'input[name="sportsDivision"]:checked'
        );


        if (!selectedSeason) {

            alert("Please select a season.");

            return;

        }


        if (!selectedDivision) {

            alert("Please select Junior, Senior, or Other.");

            return;

        }


        if (sportType.value === "") {

            alert("Please select which sport.");

            return;

        }


        subCategory =
            selectedSeason.value +
            " - " +
            sportType.value;

    }


    /* OTHER CATEGORIES */

    if (selectedCategory.value === "Pep Rally") {

        subCategory = pepRallyType.value;

    } else if (selectedCategory.value === "Dance") {

        subCategory = danceType.value;

    } else if (selectedCategory.value === "Coffee House") {

        subCategory = coffeeHouseType.value;

    }


    /* CONSENT CHECK */

    if (!consent.checked || !schoolUse.checked) {

        alert(
            "Please agree to both consent statements before submitting."
        );

        return;

    }


    /* PHOTO CHECK */

    if (photo.files.length === 0) {

        alert("Please upload a photo.");

        return;

    }


    /* PHOTO SIZE CHECK */

    if (photo.files[0].size > 10 * 1024 * 1024) {

        alert("Photo must be 10 MB or smaller.");

        return;

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

            document.getElementById(
                "successMessage"
            ).style.display = "block";

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