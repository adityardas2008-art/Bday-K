/* =========================================
   PAGE NAVIGATION
========================================= */

function nextPage(id){

    document
        .querySelectorAll(".page")
        .forEach(function(page){

            page.classList.remove("active");

        });


    const target =
        document.getElementById(id);


    if(target){

        target.classList.add("active");

    }


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}



/* =========================================
   MUSIC
   ED SHEERAN - PERFECT
========================================= */

let musicFrame = null;

let musicPlaying = false;


function startMusic(){

    if(musicPlaying){

        return;

    }


    musicFrame =
        document.createElement("iframe");


    musicFrame.src =
        "https://www.youtube.com/embed/2Vv-BfVoq4g" +
        "?autoplay=1" +
        "&controls=0" +
        "&loop=1" +
        "&playlist=2Vv-BfVoq4g" +
        "&playsinline=1" +
        "&rel=0";


    musicFrame.style.position =
        "fixed";

    musicFrame.style.width =
        "1px";

    musicFrame.style.height =
        "1px";

    musicFrame.style.left =
        "-10px";

    musicFrame.style.top =
        "-10px";

    musicFrame.style.opacity =
        "0";

    musicFrame.style.pointerEvents =
        "none";


    musicFrame.setAttribute(
        "allow",
        "autoplay"
    );


    document.body.appendChild(
        musicFrame
    );


    musicPlaying = true;


    document.getElementById(
        "musicButton"
    ).innerHTML = "🎵";

}


function toggleMusic(){

    if(!musicPlaying){

        startMusic();

        return;

    }


    if(musicFrame){

        musicFrame.remove();

        musicFrame = null;

    }


    musicPlaying = false;


    document.getElementById(
        "musicButton"
    ).innerHTML = "🔇";

}



/* =========================================
   START EXPERIENCE
========================================= */

function startExperience(){

    startMusic();

    createHeartExplosion();

    nextPage("birthday");

}



/* =========================================
   GAME 1
========================================= */

function wrong1(){

    document.getElementById(
        "result1"
    ).innerHTML =
        "Wronggg 😂 Try again ❤️";

}


function correct1(){

    document.getElementById(
        "result1"
    ).innerHTML =
        "Obviously YOU ❤️😂";


    createHeartExplosion();


    setTimeout(function(){

        nextPage("heartGame");

        startHeartGame();

    },1000);

}



/* =========================================
   GAME 2
========================================= */

let score = 0;

let heartGameRunning = false;


function startHeartGame(){

    score = 0;

    document.getElementById(
        "score"
    ).innerText = score;


    heartGameRunning = true;

    spawnHeart();

}


function spawnHeart(){

    if(!heartGameRunning){

        return;

    }


    if(score >= 10){

        heartGameRunning = false;


        setTimeout(function(){

            nextPage("game3");

        },500);


        return;

    }


    const area =
        document.getElementById(
            "heartArea"
        );


    const heart =
        document.createElement(
            "div"
        );


    heart.className =
        "falling-heart";


    heart.innerHTML =
        "❤️";


    heart.style.left =
        Math.random() * 90 + "%";


    heart.onclick =
        function(){

            score++;


            document.getElementById(
                "score"
            ).innerText = score;


            heart.remove();


            spawnHeart();

        };


    area.appendChild(heart);


    setTimeout(function(){

        if(heart.parentElement){

            heart.remove();

            spawnHeart();

        }

    },3000);

}



/* =========================================
   GAME 3
========================================= */

function wrong3(){

    document.getElementById(
        "result3"
    ).innerHTML =
        "Nopeee 😏 Try again ❤️";

}


function correct3(){

    document.getElementById(
        "result3"
    ).innerHTML =
        "Correct! That's yours ❤️";


    createHeartExplosion();


    setTimeout(function(){

        nextPage("gift");

    },1000);

}



/* =========================================
   GIFT
========================================= */

function openGift(){

    document.getElementById(
        "giftBox"
    ).innerHTML =
        "💥";


    createHeartExplosion();


    setTimeout(function(){

        nextPage("photos");

    },1000);

}



/* =========================================
   FINAL SURPRISE
========================================= */

function revealFinal(){

    document
        .getElementById(
            "finalHidden"
        )
        .classList.add("show");


    createHeartExplosion();

}



/* =========================================
   FLOATING HEARTS
========================================= */

function createHeart(){

    const heart =
        document.createElement(
            "div"
        );


    heart.className =
        "heart";


    const hearts = [

        "❤️",
        "💗",
        "💖",
        "💕",
        "💘"

    ];


    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random() *
                hearts.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (
            15 +
            Math.random() * 25
        ) + "px";


    heart.style.animationDuration =
        (
            4 +
            Math.random() * 4
        ) + "s";


    document.body.appendChild(
        heart
    );


    setTimeout(function(){

        heart.remove();

    },8000);

}



/* =========================================
   HEART EXPLOSION
========================================= */

function createHeartExplosion(){

    for(
        let i=0;
        i<35;
        i++
    ){

        setTimeout(function(){

            createHeart();

        },i*50);

    }

}



/* =========================================
   BACKGROUND HEARTS
========================================= */

setInterval(function(){

    createHeart();

},2200);
