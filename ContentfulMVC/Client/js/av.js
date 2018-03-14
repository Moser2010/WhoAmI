import "../../node_modules/p5/lib/p5";
import "../../node_modules/p5/lib/addons/p5.dom"
import "../../node_modules/p5/lib/addons/p5.sound";




var song;
function preload() {
    console.log("We got here");
    song = loadSound("https://chenyiya.com/codepen/deorro.mp3");
}

function setup() {
    createCanvas(200, 200);
    song.play();
}

function draw() {
    background(0);
}