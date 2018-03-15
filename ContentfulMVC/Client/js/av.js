import p5 from "../../node_modules/p5/lib/p5";
import dom from "../../node_modules/p5/lib/addons/p5.dom";
import sound from "../../node_modules/p5/lib/addons/p5.sound";

var song;
var amp;

document.getElementById("audiofile").onchange = function (event) {
    if (event.target.files[0]) {
        // Load our new song
        song = p5.loadSound(URL.createObjectURL(event.target.files[0]));
    }
};

function preload() {

}
function setup() {
    var myCanvas = p5.createCanvas(windowWidth, windowHeight);
    myCanvas.parent("canvas");
}

function draw() {
    p5.background(50);

    if (typeof song !== "undefined" && song.isLoaded() && !song.isPlaying()) {
        // Do once

        song.p5.setVolume(0.5);
        song.p5.play();
        amp = new p5.Amplitude();
    }

    if (typeof amp !== "undefined") {
        var vol = amp.p5.getLevel();
        var diam = p5.map(vol, 0, 0.3, 10, 200);
        p5.fill(255, 0, 255);
        p5.ellipse(width / 2, height / 2, diam, diam);
    }
}

