
// ========================================
// WEBSITE SETTINGS
// ========================================

const herName = "Stacy";

document.getElementById("name").textContent = herName;


// ========================================
// TYPING ANIMATION
// ========================================

const typingText =
    "I just wanted you to know how much I appreciate you. ❤️";

let characterIndex = 0;

const typingElement =
    document.getElementById("typingText");


function typeMessage() {

    if (characterIndex < typingText.length) {

        typingElement.textContent +=
            typingText.charAt(characterIndex);

        characterIndex++;

        setTimeout(typeMessage, 45);
    }
}


typeMessage();



// ========================================
// OPEN WEBSITE
// ========================================

const openButton =
    document.getElementById("openButton");

const mainContent =
    document.getElementById("mainContent");


openButton.addEventListener("click", function () {

    mainContent.classList.remove("hidden");

    openButton.style.display = "none";

    createHearts(20);

    mainContent.scrollIntoView({
        behavior: "smooth"
    });

});



// ========================================
// RANDOM REMINDERS
// ========================================

const reminders = [

    "You are appreciated. ❤️",

    "You make life a little brighter. ✨",

    "Your presence matters. 🌷",

    "You are genuinely special. 🫶",

    "Never forget how amazing you are. 💕",

    "I'm grateful that you exist. ❤️",

    "You deserve to be reminded how wonderful you are. 🌸",

    "You don't have to be perfect to be amazing. 💗",

    "Someone out there is genuinely happy you exist. 🥹",

    "Your smile deserves its own appreciation post. ❤️"

];


const reminderButton =
    document.getElementById("reminderButton");


const reminder =
    document.getElementById("reminder");


reminderButton.addEventListener("click", function () {

    const randomIndex =
        Math.floor(
            Math.random() * reminders.length
        );


    reminder.textContent =
        reminders[randomIndex];


    // restart animation

    reminder.style.animation = "none";

    reminder.offsetHeight;

    reminder.style.animation =
        "fadeText 0.5s ease";


    createHearts(5);

});



// ========================================
// MUSIC PLAYER
// ========================================

const music =
    document.getElementById("music");


const musicButton =
    document.getElementById("musicButton");


musicButton.addEventListener("click", function () {

    if (music.paused) {

        music.play()
            .then(function () {

                musicButton.textContent =
                    "⏸️ Pause Music";

            })
            .catch(function () {

                alert(
                    "The music could not be played. " +
                    "Make sure song.mp3 is inside the music folder."
                );

            });

    } else {

        music.pause();

        musicButton.textContent =
            "🎵 Play Music";

    }

});



// ========================================
// CINEMATIC FINAL SURPRISE
// ========================================

const surpriseButton =
    document.getElementById("surpriseButton");


const cinematicSurprise =
    document.getElementById("cinematicSurprise");


const countdown =
    document.getElementById("countdown");


const finalMessage =
    document.getElementById("finalMessage");


const closeSurprise =
    document.getElementById("closeSurprise");



surpriseButton.addEventListener("click", function () {

    cinematicSurprise.classList.remove("hidden");

    finalMessage.classList.add("hidden");

    countdown.classList.remove("hidden");


    let number = 3;


    countdown.textContent =
        number;


    createHearts(10);


    const timer =
        setInterval(function () {

            number--;


            if (number > 0) {

                countdown.textContent =
                    number;


                countdown.style.animation =
                    "none";

                countdown.offsetHeight;

                countdown.style.animation =
                    "countdownPop 1s ease";

            }


            else {

                clearInterval(timer);


                countdown.textContent =
                    "❤️";


                createHearts(20);


                setTimeout(function () {

                    countdown.classList.add("hidden");

                    finalMessage.classList.remove("hidden");

                    createHearts(40);

                }, 1000);

            }

        }, 1000);

});



// ========================================
// CLOSE FINAL SURPRISE
// ========================================

closeSurprise.addEventListener("click", function () {

    cinematicSurprise.classList.add("hidden");

    finalMessage.classList.add("hidden");

    countdown.classList.remove("hidden");

});



// ========================================
// FLOATING HEARTS
// ========================================

function createHearts(numberOfHearts) {

    const container =
        document.getElementById("heartContainer");


    for (
        let i = 0;
        i < numberOfHearts;
        i++
    ) {

        setTimeout(function () {

            const heart =
                document.createElement("div");


            heart.classList.add("heart");


            heart.textContent =
                "❤️";


            heart.style.left =
                Math.random() * 100 + "vw";


            heart.style.fontSize =
                Math.random() * 25 + 15 + "px";


            heart.style.animationDuration =
                Math.random() * 3 + 4 + "s";


            container.appendChild(heart);


            setTimeout(function () {

                heart.remove();

            }, 7000);


        }, i * 100);

    }

}

