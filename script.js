/* =========================
   THEME
========================= */

const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light"
        );


        if (
            document.body.classList.contains(
                "light"
            )
        ) {

            themeBtn.textContent = "☀️";

            localStorage.setItem(
                "theme",
                "light"
            );

        } else {

            themeBtn.textContent = "🌙";

            localStorage.setItem(
                "theme",
                "dark"
            );

        }

    }
);


/* =========================
   LOAD SAVED THEME
========================= */

if (
    localStorage.getItem("theme")
    === "light"
) {

    document.body.classList.add("light");

    themeBtn.textContent = "☀️";

}


/* =========================
   NOVEL SEARCH
========================= */

const searchInput =
    document.getElementById(
        "searchInput"
    );


const novelCards =
    document.querySelectorAll(
        ".novel-card"
    );


const noResults =
    document.getElementById(
        "noResults"
    );


searchInput.addEventListener(
    "input",
    () => {

        const searchText =
            searchInput.value
                .toLowerCase()
                .trim();


        let found = false;


        novelCards.forEach(
            card => {

                const cardText =
                    card.textContent
                        .toLowerCase();


                if (
                    cardText.includes(
                        searchText
                    )
                ) {

                    card.style.display =
                        "";

                    found = true;

                } else {

                    card.style.display =
                        "none";

                }

            }
        );


        if (found) {

            noResults.style.display =
                "none";

        } else {

            noResults.style.display =
                "block";

        }

    }
);


/* =========================
   READ NOVEL
========================= */

const readButtons =
    document.querySelectorAll(".read-btn");

readButtons.forEach(button => {

    button.addEventListener("click", () => {

        const page =
            button.getAttribute("data-page");

        if (page) {
            window.location.href = page;
        }

    });

});
/* =========================
   CHERRY BLOSSOM PARTICLES
========================= */

const blossomContainer =
    document.getElementById(
        "cherry-blossoms"
    );


function createCherryBlossom() {

    const petal =
        document.createElement("span");

    petal.classList.add(
        "cherry-petal"
    );


    /* Random starting position */

    petal.style.left =
        Math.random() * 100 + "vw";


    /* Random horizontal movement */

    const fallX =
        (Math.random() - 0.5) * 400;


    petal.style.setProperty(
        "--fall-x",
        fallX + "px"
    );


    /* Random size */

    const size =
        Math.random() * 8 + 7;


    petal.style.width =
        size + "px";


    petal.style.height =
        size * 0.75 + "px";


    /* Random opacity */

    petal.style.opacity =
        Math.random() * 0.5 + 0.4;


    /* Random animation speed */

    const fallDuration =
        Math.random() * 7 + 7;


    const swayDuration =
        Math.random() * 2 + 2;


    petal.style.animationDuration =
        fallDuration + "s, "
        + swayDuration + "s";


    /* Random delay */

    petal.style.animationDelay =
        Math.random() * 5 + "s";


    blossomContainer.appendChild(
        petal
    );


    /* Remove after animation */

    setTimeout(
        () => {

            petal.remove();

        },
        (fallDuration + 5) * 1000
    );

}


/* Create petals continuously */

setInterval(
    createCherryBlossom,
    450
);


/* Create initial petals */

for (
    let i = 0;
    i < 12;
    i++
) {

    setTimeout(
        createCherryBlossom,
        i * 300
    );

}

readButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                const novelName =
                    button.dataset.novel;


                alert(
                    `"${novelName}" reader will be added soon! 📖`
                );

            }
        );

    }
);
