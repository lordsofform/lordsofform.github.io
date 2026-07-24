const flash = document.getElementById("flash");

if (flash) {

    const images = [
        "images/crow.jpg",
        "images/fallow.jpg",
        "images/flying.jpg",
        "images/hypnotise.jpg",
        "images/strangers.jpg"
    ];

    function randomImage() {
        return images[Math.floor(Math.random() * images.length)];
    }

    function whiteFlash(duration = 30) {

        flash.style.background = "#ffffff";
        flash.style.backgroundImage = "none";
        flash.style.filter = "none";
        flash.style.opacity = 0.08 + Math.random() * 0.12;

        setTimeout(() => {
            flash.style.opacity = 0;
        }, duration);

    }

    function artworkFlash(duration = 140) {

        flash.style.backgroundColor = "transparent";
        flash.style.backgroundImage = `url("${randomImage()}")`;
        flash.style.backgroundPosition = "center";
        flash.style.backgroundSize = "cover";
        flash.style.backgroundRepeat = "no-repeat";

        flash.style.filter =
            "brightness(60%) contrast(115%) saturate(90%)";

        flash.style.opacity = 1;

        setTimeout(() => {
            flash.style.opacity = 0;
        }, duration);

    }

    function storm() {

        const strikes = Math.floor(Math.random() * 4) + 1;

        for (let i = 0; i < strikes; i++) {

            setTimeout(() => {

                whiteFlash(
                    20 + Math.random() * 30
                );

            }, i * (45 + Math.random() * 45));

        }

        if (Math.random() < 0.75) {

            setTimeout(() => {

                artworkFlash(
                    100 + Math.random() * 80
                );

            }, strikes * 60);

        }

        setTimeout(
            storm,
            2500 + Math.random() * 4000
        );

    }

    window.addEventListener("load", () => {

        setTimeout(storm, 1500);

    });

}
/* ==========================================
   ABOUT PAGE SCROLL REVEAL
========================================== */

const reveals = document.querySelectorAll(".reveal");

if (reveals.length) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {

        threshold: 0.15

    });

    reveals.forEach(section => {

        observer.observe(section);

    });

}