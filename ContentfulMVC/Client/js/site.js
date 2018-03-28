// Write your JavaScript code.


//Start:   Fixed on scroll Navbar
var header = document.getElementsByTagName('header');
var bar = document.getElementById("socialBar");
var navLeft = document.getElementsByClassName("scrollNavLeft");
var navCenter = document.getElementsByClassName("scrollNavCenter");
window.addEventListener('scroll', function (e) {
    if (window.scrollY > header[0].offsetHeight + bar.offsetHeight / 2) {
        bar.classList.add("fixed");

        navCenter[0].classList.remove("invisible");
    } else {
        bar.classList.remove("fixed");

    }
});


//End:     Fixed on Scroll Navbar

//Start:    Vertical Posts Gallery

function masonry(container, items, images, spacing, dCol, tCol, mCol) {
    //selects the following classes from the the DOM.
    var g = document.querySelector(container),
        //The below returns an array
        gc = document.querySelectorAll(items),
        gi = document.querySelectorAll(images),
        //Finds the length of the array
        gcLength = gc.length,
        gHeight = 0,
        i;
    for (i = 0; i < gcLength; i++) {
        gc[i].style.height = getRandomIntInclusive(200, 400) + "px";
        gi[i].style.minHeight = gc[i].style.height;

        //Total height of all items
        gHeight += gc[i].offsetHeight + parseInt(spacing);
    }
    if (document.documentElement.clientWidth >= 940) {
        g.style.height = gHeight / dCol + gHeight / (gcLength + 1) + "px";
    } else if (
        document.documentElement.clientWidth < 940 &&
        document.documentElement.clientWidth >= 768
    ) {
        g.style.height = gHeight / tCol + gHeight / (gcLength + 1) + "px";
    } else {
        g.style.height = gHeight / mCol + gHeight / (gcLength + 1) + "px";
    }
}



function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
window.onload = function () {
    var grid = document.getElementById("grid");
    if (grid != null) { masonry(".grid", ".item", ".masonryImage", 10, 4, 3, 1); }}

//End:    Vertical Posts Gallery

//Start: Horizontal Gallery Display function

var img = document.querySelectorAll('.hgItem');
//var ctWrapper = document.querySelectorAll('');
for (var i = 0; i < img.length; i++) {
    img[i].addEventListener("mouseenter", function () {
       this.getElementsByClassName("hgContentWrapper")[0].style = "display:block !important;"
    })
    img[i].addEventListener("mouseleave", function () {
        this.getElementsByClassName("hgContentWrapper")[0].style = "display:none !important;"
    })
}

//Typer
//Disclaimer. This is not my code and I do not claim to have built this. I do understand the concept behind this and have built similar things in the past but I didn't have time to build my own. Original code for this belongs to https://codepen.io/siebevd/
let words = [
    "UX/UI Developer",
    "Front-End Devloper",
    "Web Designer",
    "Web Developer"
    
];
let text = document.getElementById("stuff");
let cStep = 0,
    oWord = "";

setTimeout(changeWord, 1000);

function changeWord() {
    oWord = text.innerHTML;

    // check if there is a word atm or not
    if (oWord.length < 1) {

        if (cStep !== words.length - 1) {
            cStep++;
        } else {
            cStep = 0;
        }
        addNextWord();
    } else {
        setTimeout(deleteWord, 2000);
    }

};

function deleteWord() {
    var WordLength = oWord.length,
        cWord = text.innerHTML,
        cLength = cWord.length;


    // The word is deleted so, start adding in the new one
    if (cLength < 1) {
        changeWord();
        return;
    }

    // Remove a charachter
    text.innerHTML = cWord.substring(0, cLength - 1);

    setTimeout(deleteWord, 200);
}

function addNextWord() {
    var cWord = text.innerHTML,
        cLength = cWord.length,
        nextWord = words[cStep],
        nextWordLength = nextWord.length;


    if (cLength === nextWordLength) {
        changeWord();
        return;
    }

    // add a charachter
    text.innerHTML = nextWord.substring(0, cLength + 1);

    setTimeout(addNextWord, 200);


}