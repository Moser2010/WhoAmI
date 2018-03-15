
import p5 from "p5";
import "p5/lib/addons/p5.dom";
import "p5/lib/addons/p5.sound";

var song;
var amp;
var width = window.innerWidth;
var height = window.innerHeight



var sketch = function (p) {
    document.getElementById("audiofile").onchange = function (event) {
        if (event.target.files[0]) {
            // Load our new song
            song = p.loadSound(URL.createObjectURL(event.target.files[0]));
        }
    };
    var gray = 0;

    p.setup = function () {
        
        var myCanvas = p.createCanvas(width, height);
        myCanvas.parent("canvas");
    };

    p.draw = function () {
        p.background(50);

        if (typeof song !== "undefined" && song.isLoaded() && !song.isPlaying()) {
            // Do once
            song.setVolume(0.5);
            song.play();
            amp = new p5.Amplitude();
           
        }

        if (typeof amp !== "undefined") {
            console.log("got in here")
            var vol = amp.getLevel();
            var diam = p.map(vol, 0, 0.3, 100, 500);
            p.fill(255, 0, 255);
            p.ellipse(width / 2, height / 2, diam, diam);
        }
    };
};

new p5(sketch);

