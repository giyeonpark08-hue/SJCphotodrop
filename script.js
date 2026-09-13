const scriptURL =
    "https://script.google.com/macros/s/AKfycbxA_L3ZVWsICH7guD8VaFipoZxburVd8y1W4fIHDTgBcapWuiHjQjmUU0Laif7K7izq/exec";

const categoryInputs =
    document.querySelectorAll(
        'input[name="category"]'
    );

const pepRallyDetails =
    document.getElementById(
        "pepRallyDetails"
    );

const danceDetails =
    document.getElementById(
        "danceDetails"
    );

const coffeeHouseDetails =
    document.getElementById(
        "coffeeHouseDetails"
    );

const sportsDetails =
    document.getElementById(
        "sportsDetails"
    );

const sportsSeasonDetails =
    document.getElementById(
        "sportsSeasonDetails"
    );

const sportDivisionDetails =
    document.getElementById(
        "sportDivisionDetails"
    );

const sportTypeDetails =
    document.getElementById(
        "sportTypeDetails"
    );

const sportsSeasonInputs =
    document.querySelectorAll(
        'input[name="sportsSeason"]'
    );

const sportDivisionInputs =
    document.querySelectorAll(
        'input[name="sportDivision"]'
    );

const sportType =
    document.getElementById(
        "sportType"
    );

const photoInput =
    document.getElementById(
        "photo"
    );

const photoLabel =
    document.getElementById(
        "photoLabel"
    );

const submitButton =
    document.getElementById(
        "submitButton"
    );

const successMessage =
    document.getElementById(
        "successMessage"
    );


// -------------------------
// Category selection
// -------------------------

categoryInputs.forEach(input => {

    input.addEventListener(
        "change",
        function () {

            pepRallyDetails.style.display =
                "none";

            danceDetails.style.display =
                "none";

            coffeeHouseDetails.style.display =
                "none";

            sportsDetails.style.display =
                "none";

            sportsSeasonDetails.style.display =
                "none";

            sportDivisionDetails.style.display =
                "none";

            sportTypeDetails.style.display =
                "none";


            if (
                this.value ===
                "Pep Rally"
            ) {

                pepRallyDetails.style.display =
                    "block";

            }


            if (
                this.value ===
                "Dance"
            ) {

                danceDetails.style.display =
                    "block";

            }


            if (
                this.value ===
                "Coffee House"
            ) {

                coffeeHouseDetails.style.display =
                    "block";

            }


            if (
                this.value ===
                "Sports"
            ) {

                sportsDetails.style.display =
                    "block";

                sportsSeasonDetails.style.display =
                    "block";

            }

        }
    );

});


// -------------------------
// Sports season selection
// -------------------------

sportsSeasonInputs.forEach(input => {

    input.addEventListener(
        "change",
        function () {

            sportDivisionDetails.style.display =
                "none";

            sportTypeDetails.style.display =
                "none";


            // Other season
            if (
                this.value ===
                "Other"
            ) {

                return;

            }


            // Fall / Winter / Spring
            if (
                this.value === "Fall" ||
                this.value === "Winter" ||
                this.value === "Spring"
            ) {

                sportDivisionDetails.style.display =
                    "block";

            }

        }
    );

});


// -------------------------
// Sport level selection
// -------------------------

sportDivisionInputs.forEach(input => {

    input.addEventListener(
        "change",
        function () {

            sportTypeDetails.style.display =
                "block";

            sportType.innerHTML =
                "";


            const season =
                document.querySelector(
                    'input[name="sportsSeason"]:checked'
                )?.value;

            const level =
                this.value;


            // -------------------------
            // FALL
            // -------------------------

            if (
                season === "Fall"
            ) {

                if (
                    level === "Junior" ||
                    level === "Senior"
                ) {

                    sportType.innerHTML +=
                        `
                        <option value="">
                            Select sport
                        </option>

                        <option value="Boys Basketball">
                            Boys Basketball
                        </option>

                        <option value="Girls Basketball">
                            Girls Basketball
                        </option>

                        <option value="Boys Volleyball">
                            Boys Volleyball
                        </option>

                        <option value="Girls Volleyball">
                            Girls Volleyball
                        </option>

                        <option value="Boys Football">
                            Boys Football
                        </option>
                        `;

                }


                if (
                    level === "Other"
                ) {

                    sportType.innerHTML +=
                        `
                        <option value="">
                            Select sport
                        </option>

                        <option value="Cross Country">
                            Cross Country
                        </option>

                        <option value="Golf">
                            Golf
                        </option>

                        <option value="Tennis">
                            Tennis
                        </option>

                        <option value="Boys Baseball">
                            Boys Baseball
                        </option>

                        <option value="Girls Fast Pitch">
                            Girls Fast Pitch
                        </option>

                        <option value="Girls Field Hockey">
                            Girls Field Hockey
                        </option>

                        <option value="Girls Rugby 7s">
                            Girls Rugby 7s
                        </option>

                        <option value="Girls Flag Football">
                            Girls Flag Football
                        </option>
                        `;

                }

            }


            // -------------------------
            // WINTER
            // -------------------------

            if (
                season === "Winter"
            ) {

                if (
                    level === "Junior" ||
                    level === "Senior"
                ) {

                    sportType.innerHTML +=
                        `
                        <option value="">
                            Select sport
                        </option>

                        <option value="Boys Basketball">
                            Boys Basketball
                        </option>

                        <option value="Girls Basketball">
                            Girls Basketball
                        </option>

                        <option value="Boys Volleyball">
                            Boys Volleyball
                        </option>

                        <option value="Girls Volleyball">
                            Girls Volleyball
                        </option>

                        <option value="Badminton">
                            Badminton
                        </option>
                        `;

                }


                if (
                    level === "Other"
                ) {

                    sportType.innerHTML +=
                        `
                        <option value="">
                            Select sport
                        </option>

                        <option value="Wrestling">
                            Wrestling
                        </option>

                        <option value="Boys Hockey">
                            Boys Hockey
                        </option>

                        <option value="Girls Hockey">
                            Girls Hockey
                        </option>

                        <option value="Swimming">
                            Swimming
                        </option>

                        <option value="Curling">
                            Curling
                        </option>
                        `;

                }

            }


            // -------------------------
            // SPRING
            // -------------------------

            if (
                season === "Spring"
            ) {

                if (
                    level === "Junior" ||
                    level === "Senior"
                ) {

                    sportType.innerHTML +=
                        `
                        <option value="">
                            Select sport
                        </option>

                        <option value="Boys Rugby">
                            Boys Rugby
                        </option>
                        `;

                }


                if (
                    level === "Other"
                ) {

                    sportType.innerHTML +=
                        `
                        <option value="">
                            Select sport
                        </option>

                        <option value="Girls Rugby">
                            Girls Rugby
                        </option>

                        <option value="Boys Soccer">
                            Boys Soccer
                        </option>

                        <option value="Girls Soccer">
                            Girls Soccer
                        </option>

                        <option value="Boys Lacrosse">
                            Boys Lacrosse
                        </option>

                        <option value="Ultimate">
                            Ultimate
                        </option>

                        <option value="Track and Field">
                            Track and Field
                        </option>
                        `;

                }

            }

        }
    );

});


// -------------------------
// Photo file names
// -------------------------

photoInput.addEventListener(
    "change",
    function () {

        if (
            this.files.length === 0
        ) {

            photoLabel.textContent =
                "Click to upload photos";

            return;

        }


        const fileNames =
            Array.from(this.files)
                .map(file => file.name)
                .join("<br>");


        photoLabel.innerHTML =
            fileNames;

    }
);


// -------------------------
// Read file
// -------------------------

function readFileAsDataURL(file) {

    return new Promise(
        (resolve, reject) => {

            const reader =
                new FileReader();

            reader.onload =
                () => resolve(
                    reader.result
                );

            reader.onerror =
                () => reject(
                    new Error(
                        "Could not read file."
                    )
                );

            reader.readAsDataURL(
                file
            );

        }
    );

}


// -------------------------
// Submit
// -------------------------

submitButton.addEventListener(
    "click",
    async function () {

        try {

            const category =
                document.querySelector(
                    'input[name="category"]:checked'
                );


            if (!category) {

                alert(
                    "Please select a category."
                );

                return;

            }


            let subCategory =
                "";


            if (
                category.value ===
                "Pep Rally"
            ) {

                subCategory =
                    document.getElementById(
                        "pepRally"
                    ).value;

            }


            if (
                category.value ===
                "Dance"
            ) {

                subCategory =
                    document.getElementById(
                        "dance"
                    ).value;

            }


            if (
                category.value ===
                "Coffee House"
            ) {

                subCategory =
                    document.getElementById(
                        "coffeeHouse"
                    ).value;

            }


            if (
                category.value ===
                "Sports"
            ) {

                const season =
                    document.querySelector(
                        'input[name="sportsSeason"]:checked'
                    );


                if (!season) {

                    alert(
                        "Please select a sports season."
                    );

                    return;

                }


                if (
                    season.value ===
                    "Other"
                ) {

                    subCategory =
                        "Sports - Other";

                } else {

                    const level =
                        document.querySelector(
                            'input[name="sportDivision"]:checked'
                        );


                    if (!level) {

                        alert(
                            "Please select a level."
                        );

                        return;

                    }


                    const sport =
                        sportType.value;


                    if (!sport) {

                        alert(
                            "Please select a sport."
                        );

                        return;

                    }


                    subCategory =
                        "Sports - " +
                        season.value +
                        " - " +
                        level.value +
                        " - " +
                        sport;

                }

            }


            const files =
                Array.from(
                    photoInput.files
                );


            if (
                files.length === 0
            ) {

                alert(
                    "Please select at least one photo."
                );

                return;

            }


            // Maximum size for one photo
            const maxFileSize =
                10 * 1024 * 1024;


            // Maximum total size
            const maxTotalSize =
                20 * 1024 * 1024;


            let totalSize = 0;


            for (
                const file of files
            ) {

                if (
                    file.size >
                    maxFileSize
                ) {

                    alert(
                        file.name +
                        " is larger than 10 MB."
                    );

                    return;

                }


                totalSize +=
                    file.size;

            }


            if (
                totalSize >
                maxTotalSize
            ) {

                alert(
                    "The total photo size is too large. Please select smaller photos."
                );

                return;

            }


            // Disable button while sending
            submitButton.disabled =
                true;

            submitButton.textContent =
                "Submitting...";


            const photoData =
                await Promise.all(

                    files.map(
                        async file => {

                            const data =
                                await readFileAsDataURL(
                                    file
                                );

                            return {

                                photoName:
                                    file.name,

                                photoType:
                                    file.type,

                                photoData:
                                    data

                            };

                        }
                    )

                );


            const submission = {

                category:
                    category.value,

                subCategory:
                    subCategory,

                photos:
                    photoData

            };


            // Send to Google Apps Script
            const response =
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


            // Do NOT parse response as JSON.
            // Apps Script may return a response
            // that cannot be read by response.json().


            // Success
            submitButton.style.display =
                "none";

            successMessage.style.display =
                "block";


        } catch (error) {

            console.error(
                error
            );

            alert(
                "Something went wrong. Please try again."
            );


            submitButton.disabled =
                false;

            submitButton.textContent =
                "Submit";

        }

    }
);