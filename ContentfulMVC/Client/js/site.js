// Write your JavaScript code.


//Start:   Fixed on scroll Navbar
var header = document.getElementsByTagName('header');
var bar = document.getElementById("socialBar");
var navLeft = document.getElementsByClassName("scrollNavLeft");
var navCenter = document.getElementsByClassName("scrollNavCenter");
header[0].addEventListener('click', function () {
    header[0].className = "invisible";
    console.log("Clicked on Header");
})
window.addEventListener('scroll', function (e) {
    if (window.scrollY > header[0].offsetHeight + bar.offsetHeight / 2) {
        bar.classList.add("fixed");
        navLeft[0].classList.remove("invisible");
        navCenter[0].classList.remove("invisible");
    } else {
        navLeft[0].classList.add("invisible");
        navCenter[0].classList.add("invisible");

        bar.classList.remove("fixed");
  
    }
});


//End:     Fixed on Scroll Navbar

//Start:    Vertical Posts Gallery
function masonry(container, items, spacing, dCol, tCol, mCol) {
    //selects the following classes from the the DOM.
    var g = document.querySelector(container),
        //The below returns an array
        gc = document.querySelectorAll(items),
        //Finds the length of the array
        gcLength = gc.length,
        gHeight = 0,
        i;

    for (i = 0; i < gcLength; i++) {
        gHeight += gc[i].offsetHeight + parseInt(spacing);
        //console.log(gHeight)

    }
    if (document.documentElement.clientWidth >= 1024) {
        g.style.height = gHeight / dCol + gHeight / (gcLength + 1)  + "px";
    } else if (document.documentElement.clientWidth < 1024 && document.documentElement.clientWidth >= 768) {
        g.style.height = gHeight / tCol + gHeight / (gcLength + 1)  + "px";
    } else {
        g.style.height = gHeight / mCol + gHeight / (gcLength + 1)  + "px";
    }
}


["resize", "load"].forEach(function (event) {
    window.addEventListener(event, function () {
        imagesLoaded(document.querySelector('.grid'), function () {
            // A maonsry grid with 8px gutter, with 3 columns on desktop, 2 on tablet, and 1 column on mobile devices.

            masonry(".grid", ".item", 0, 4, 3, 1);
        });
    });
});
//End:    Vertical Posts Gallery