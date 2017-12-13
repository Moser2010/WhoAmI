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
window.addEventListener('scroll', function(e) {console.log("Scrolled");});


//End:     Fixed on Scroll Navbar