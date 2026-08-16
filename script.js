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



/* =========================================
   MUSIC BUTTON
========================================= */

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
   GAME 2 - CATCH MY HEART
========================================= */

let catchScore = 0;

let catchGameRunning = false;


function startHeartGame(){

    catchScore = 0;

    catchGameRunning = true;


    document.getElementById(
        "catchScore"
    ).innerText = catchScore;


    document.getElementById(
        "catchMessage"
    ).innerText =
        "Catch the heart! ❤️";


    const heart =
        document.getElementById(
            "movingHeart"
        );


    heart.style.display =
        "flex";


    moveHeart();

}



/* =========================================
   MOVE HEART
========================================= */

function moveHeart(){

    if(!catchGameRunning){

        return;

    }


    const area =
        document.getElementById(
            "catchArea"
        );


    const heart =
        document.getElementById(
            "movingHeart"
        );


    const heartSize = 70;


    const maxX =
        area.clientWidth -
        heartSize;


    const maxY =
        area.clientHeight -
        heartSize;


    const randomX =
        Math.floor(
            Math.random() * maxX
        );


    const randomY =
        Math.floor(
            Math.random() * maxY
        );


    heart.style.left =
        randomX + "px";


    heart.style.top =
        randomY + "px";

}



/* =========================================
   CATCH HEART
========================================= */

function catchHeart(){

    if(!catchGameRunning){

        return;

    }


    catchScore++;


    document.getElementById(
        "catchScore"
    ).innerText =
        catchScore;


    createHeartExplosion();


    if(catchScore >= 5){

        catchGameRunning = false;


        document.getElementById(
            "catchMessage"
        ).innerText =
            "You caught my heart! ❤️";


        document.getElementById(
            "movingHeart"
        ).style.display =
            "none";


        setTimeout(function(){

            nextPage("game3");

        },1200);


        return;

    }


    document.getElementById(
        "catchMessage"
    ).innerText =
        "Got me! But I'm running again 😏❤️";


    moveHeart();

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
