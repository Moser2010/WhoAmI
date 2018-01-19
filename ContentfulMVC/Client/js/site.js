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
    console.log("Started image sizing")
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

["resize", "load"].forEach(function (event) {
    window.addEventListener(event, function () {
        imagesLoaded(document.querySelector(container), function () {
            // A maonsry grid with 8px gutter, with 3 columns on desktop, 2 on tablet, and 1 column on mobile devices.


        });
    });
});

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
window.onload = function () { masonry(".grid", ".item", ".masonryImage", 10, 4, 3, 1); }

//End:    Vertical Posts Gallery