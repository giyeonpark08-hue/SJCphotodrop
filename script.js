const scriptURL = "https://script.google.com/macros/s/AKfycbxA_L3ZVWsICH7guD8VaFipoZxburVd8y1W4fIHDTgBcapWuiHjQjmUU0Laif7K7izq/exec";

const submitButton = document.getElementById("submitButton");

const consent = document.getElementById("consent");
const schoolUse = document.getElementById("schoolUse");

const photo = document.getElementById("photo");
const photoLabel = document.getElementById("photoLabel");


/* =========================
   PHOTO FILE NAMES
   ========================= */

photo.addEventListener("change", function () {

    if (photo.files.length === 0) {

        photoLabel.textContent =
            "Click to upload photos";

        return;
    }

    if (photo.files.length === 1) {

        photoLabel.textContent =
            photo.files[0].name + " ✓";

    } else {

        photoLabel.textContent =
            photo.files.length + " photos selected ✓";

    }

});


/* =========================
   CATEGORY ELEMENTS
   ========================= */

const categoryOptions =
    document.querySelectorAll(
        'input[name="category"]'
    );

const pepRally =
    document.getElementById("pepRally");

const pepRallyDetails =
    document.getElementById("pepRallyDetails");

const pepRallyType =
    document.getElementById("pepRallyType");


const dance =
    document.getElementById("dance");

const danceDetails =
    document.getElementById("danceDetails");

const danceType =
    document.getElementById("danceType");


const coffeeHouse =
    document.getElementById("coffeeHouse");

const coffeeHouseDetails =
    document.getElementById("coffeeHouseDetails");

const coffeeHouseType =
    document.getElementById("coffeeHouseType");


const sports =
    document.getElementById("sports");

const sportsDetails =
    document.getElementById("sportsDetails");


const sportDivisionDetails =
    document.getElementById(
        "sportDivisionDetails"
    );

const sportTypeDetails =
    document.getElementById(
        "sportTypeDetails"
    );

const sportType =
    document.getElementById("sportType");


/* =========================
   SPORTS OPTIONS
   ========================= */

const seasonOptions =
    document.querySelectorAll(
        'input[name="sportsSeason"]'
    );

const divisionOptions =
    document.querySelectorAll(
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
   OTHER SPORTS
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

    option.addEventListener(
        "change",
        function () {


            /* PEP RALLY */

            if (pepRally.checked) {

                pepRallyDetails.style.display =
                    "block";

                pepRallyType.required = true;

            } else {

                pepRallyDetails.style.display =
                    "none";

                pepRallyType.required = false;

                pepRallyType.value = "";

            }


            /* DANCE */

            if (dance.checked) {

                danceDetails.style.display =
                    "block";

                danceType.required = true;

            } else {

                danceDetails.style.display =
                    "none";

                danceType.required = false;

                danceType.value = "";

            }


            /* COFFEE HOUSE */

            if (coffeeHouse.checked) {

                coffeeHouseDetails.style.display =
                    "block";

                coffeeHouseType.required = true;

            } else {

                coffeeHouseDetails.style.display =
                    "none";

                coffeeHouseType.required = false;

                coffeeHouseType.value = "";

            }


            /* SPORTS */

            if (sports.checked) {

                sportsDetails.style.display =
                    "block";

            } else {

                sportsDetails.style.display =
                    "none";

                sportDivisionDetails.style.display =
                    "none";

                sportTypeDetails.style.display =
                    "none";


                seasonOptions.forEach(option => {

                    option.checked = false;

                });


                divisionOptions.forEach(option => {

                    option.checked = false;

                });


                sportType.value = "";

            }

        }
    );

});


/* =========================
   SPORTS SEASON
   ========================= */

seasonOptions.forEach(option => {

    option.addEventListener(
        "change",
        function () {


            /* OTHER */

            if (this.value === "Other") {

                sportDivisionDetails.style.display =
                    "none";

                sportTypeDetails.style.display =
                    "none";


                divisionOptions.forEach(option => {

                    option.checked = false;

                });


                sportType.value = "";

                return;

            }


            /* FALL / WINTER / SPRING */

            sportDivisionDetails.style.display =
                "block";

            sportTypeDetails.style.display =
                "none";


            divisionOptions.forEach(option => {

                option.checked = false;

            });


            sportType.innerHTML = `
                <option value="">
                    Select which sport
                </option>
            `;

        }
    );

});


/* =========================
   SPORTS LEVEL
   ========================= */

divisionOptions.forEach(option => {

    option.addEventListener(
        "change",
        function () {


            const selectedSeason =
                document.querySelector(
                    'input[name="sportsSeason"]:checked'
                );


            if (!selectedSeason) {

                return;

            }


            sportType.innerHTML = `
                <option value="">
                    Select which sport
                </option>
            `;


            /* OTHER LEVEL */

            if (this.value === "Other") {

                otherSportsBySeason[
                    selectedSeason.value
                ].forEach(sport => {

                    const optionElement =
                        document.createElement(
                            "option"
                        );

                    optionElement.value =
                        sport;

                    optionElement.textContent =
                        sport;

                    sportType.appendChild(
                        optionElement
                    );

                });


            /* JUNIOR / SENIOR */

            } else {

                sportsBySeason[
                    selectedSeason.value
                ][this.value].forEach(sport => {

                    const optionElement =
                        document.createElement(
                            "option"
                        );


                    optionElement.value =
                        this.value +
                        " " +
                        sport;


                    optionElement.textContent =
                        this.value +
                        " " +
                        sport;


                    sportType.appendChild(
                        optionElement
                    );

                });

            }


            sportTypeDetails.style.display =
                "block";

        }
    );

});


/* =========================
   READ PHOTO
   ========================= */

function readFileAsDataURL(file) {

    return new Promise(
        (resolve, reject) => {

            const reader =
                new FileReader();


            reader.onload =
                function () {

                    resolve(
                        reader.result
                    );

                };


            reader.onerror =
                function () {

                    reject(
                        reader.error
                    );

                };


            reader.readAsDataURL(
                file
            );

        }
    );

}


/* =========================
   SUBMIT
   ========================= */

submitButton.addEventListener(
    "click",
    async function () {


        /* CATEGORY */

        const selectedCategory =
            document.querySelector(
                'input[name="category"]:checked'
            );


        if (!selectedCategory) {

            alert(
                "Please select a category."
            );

            return;

        }


        /* PEP RALLY */

        if (
            selectedCategory.value ===
                "Pep Rally" &&
            pepRallyType.value === ""
        ) {

            alert(
                "Please select which Pep Rally."
            );

            return;

        }


        /* DANCE */

        if (
            selectedCategory.value ===
                "Dance" &&
            danceType.value === ""
        ) {

            alert(
                "Please select which Dance."
            );

            return;

        }


        /* COFFEE HOUSE */

        if (
            selectedCategory.value ===
                "Coffee House" &&
            coffeeHouseType.value === ""
        ) {

            alert(
                "Please select which Coffee House."
            );

            return;

        }


        /* =========================
           SPORTS
           ========================= */

        let subCategory = "";


        if (
            selectedCategory.value ===
            "Sports"
        ) {


            const selectedSeason =
                document.querySelector(
                    'input[name="sportsSeason"]:checked'
                );


            if (!selectedSeason) {

                alert(
                    "Please select a season."
                );

                return;

            }


            /* OTHER SEASON */

            if (
                selectedSeason.value ===
                "Other"
            ) {

                subCategory =
                    "Other";

            } else {


                const selectedDivision =
                    document.querySelector(
                        'input[name="sportsDivision"]:checked'
                    );


                if (!selectedDivision) {

                    alert(
                        "Please select Junior, Senior, or Other."
                    );

                    return;

                }


                if (
                    sportType.value === ""
                ) {

                    alert(
                        "Please select which sport."
                    );

                    return;

                }


                subCategory =
                    selectedSeason.value +
                    " - " +
                    sportType.value;

            }

        }


        /* =========================
           OTHER CATEGORIES
           ========================= */

        if (
            selectedCategory.value ===
            "Pep Rally"
        ) {

            subCategory =
                pepRallyType.value;

        } else if (
            selectedCategory.value ===
            "Dance"
        ) {

            subCategory =
                danceType.value;

        } else if (
            selectedCategory.value ===
            "Coffee House"
        ) {

            subCategory =
                coffeeHouseType.value;

        }


        /* =========================
           CONSENT
           ========================= */

        if (
            !consent.checked ||
            !schoolUse.checked
        ) {

            alert(
                "Please agree to both consent statements before submitting."
            );

            return;

        }


        /* =========================
           PHOTO CHECK
           ========================= */

        if (
            photo.files.length === 0
        ) {

            alert(
                "Please upload at least one photo."
            );

            return;

        }


        /* =========================
           PHOTO SIZE CHECK
           ========================= */

        let totalSize = 0;


        for (
            let i = 0;
            i < photo.files.length;
            i++
        ) {

            const file =
                photo.files[i];


            totalSize +=
                file.size;


            if (
                file.size >
                10 * 1024 * 1024
            ) {

                alert(
                    file.name +
                    " is larger than 10 MB."
                );

                return;

            }

        }


        /* =========================
           TOTAL SIZE
           ========================= */

        if (
            totalSize >
            20 * 1024 * 1024
        ) {

            alert(
                "The total size of all photos must be 20 MB or less."
            );

            return;

        }


        /* =========================
           SUBMITTING
           ========================= */

        submitButton.textContent =
            "Submitting...";

        submitButton.disabled =
            true;


        try {


            /* GET ALL FILES */

            const files =
                Array.from(
                    photo.files
                );


            /* READ ALL PHOTOS */

            const photos =
                await Promise.all(

                    files.map(
                        async file => {

                            const photoData =
                                await readFileAsDataURL(
                                    file
                                );


                            return {

                                photoName:
                                    file.name,

                                photoType:
                                    file.type,

                                photoData:
                                    photoData

                            };

                        }
                    )

                );


            /* =========================
               SUBMISSION
               ========================= */

            const submission = {

                category:
                    selectedCategory.value,

                subCategory:
                    subCategory,

                photos:
                    photos

            };


            /* =========================
               SEND
               ========================= */

            await fetch(
                scriptURL,
                {

                    method: "POST",

                    body:
                        JSON.stringify(
                            submission
                        )

                }
            );


            /* =========================
               SUCCESS
               ========================= */

            submitButton.style.display =
                "none";


            document.getElementById(
                "successMessage"
            ).style.display =
                "block";


        } catch (error) {

            console.error(
                error
            );


            submitButton.textContent =
                "Submit";


            submitButton.disabled =
                false;


            alert(
                "Something went wrong. Please try again."
            );

        }

    }
);