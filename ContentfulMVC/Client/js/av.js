
import p5 from "p5/lib/p5";
import "p5/lib/addons/p5.dom";
import "p5/lib/addons/p5.sound";

var song;
var amp;




var sketch = function (p5) {
    document.getElementById("audiofile").onchange = function (event) {
        if (event.target.files[0]) {
            // Load our new song
            song = p5.loadSound(URL.createObjectURL(event.target.files[0]));
        }
    };
    var gray = 0;

    p5.setup = function () {
        var width = window.innerWidth;
        var height = window.innerHeight
        var myCanvas = p5.createCanvas(width, height);
        myCanvas.parent("canvas");
    };

    p5.draw = function () {
        p5.background(50);

        if (typeof song !== "undefined" && song.isLoaded() && !song.isPlaying()) {
            // Do once
            song.setVolume(0.5);
            song.play();
            amp = new p5.Amplitude();
           
        }

        if (typeof amp !== "undefined") {
            console.log("got in here")
            var vol = amp.getLevel();
            var diam = p5.map(vol, 0, 0.3, 10, 200);
            p5.fill(255, 0, 255);
            p5.ellipse(width / 2, height / 2, diam, diam);
        }
    };
};

new p5(sketch);
