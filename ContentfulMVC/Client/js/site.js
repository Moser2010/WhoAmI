// Write your JavaScript code.
import Masonry from "../../node_modules/masonry-layout/masonry.js";

var elem = document.querySelector('.grid');
var msnry = new Masonry(elem, {
    // options
    itemSelector: '.grid-item',
    columnWidth: 200
});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry('.grid', {
    // options
});
//End: Masonry.js

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