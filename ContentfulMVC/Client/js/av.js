
////////////////////
//Conect Audio API//
////////////////////
var context = new AudioContext();
var analyser = context.createAnalyser();
analyser.fftSize = 256;
analyser.minDecibels = -90;
analyser.maxDecibels = -10;

var bufferLength = analyser.frequencyBinCount;
var frequencyData = new Uint8Array(bufferLength);
////////////////////////
//Get Canvas from HTML//
///////////////////////
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var audio = new Audio(); // this creates a new audio HTML TAG
/////////////////////////////////////////////
//Click on the canvas and fire file handler//
/////////////////////////////////////////////
if (canvas != null) {
    canvas.addEventListener("click", function () {
        let aFile = document.getElementById("audioFile");
        aFile.click();

        //play a song
        aFile.addEventListener("change", function (event) {
            audio.src = URL.createObjectURL(event.target.files[0]);
            audio.volume = 0.7;
            audio.play();

            let source = context.createMediaElementSource(audio);
            source.connect(analyser);
            source.connect(context.destination);

            draw();
        });
    });

    /////////////////
    //Draw a shape//
    ////////////////
    function draw() {
        requestAnimationFrame(draw);
        ctx.clearRect(0, 0, canvas.width, canvas.height);


        //analyser.getByteTimeDomainData(frequencyData);
        analyser.getByteFrequencyData(frequencyData);

        var frequencyWidth = canvas.width / bufferLength * 2.5;
        var frequencyHeight = 0,
            x = 0;
        for (var increment = 0; increment < bufferLength; increment++) {
            frequencyHeight = frequencyData[increment];
            ctx.fillStyle = "#198CFF"; //'rgb(255, 120, 120)';
            ctx.fillRect(
                x,
                (canvas.height / 2) - frequencyHeight,
                frequencyWidth,
                frequencyHeight
            );
            ctx.fillRect(
                x,
                canvas.height / 2 - 1,
                frequencyWidth,
                frequencyHeight
            );
            x += frequencyWidth + 5;
        }
        /*ctx.beginPath();
        ctx.arc(
          canvas.width / 2,
          canvas.height / 2,
          frequencyData[0] / 2,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = "red";
        ctx.lineWidth = 5;*/
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.fill();
        drawFlakes();
    }


    //create snowflakes

    var maxFlakes = analyser.fftSize;
    var flakes = [];

    for (let i = 0; i < maxFlakes; i++) {
        flakes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 5 + 2,
            density: Math.random() + 1
        })
    }


    function drawFlakes() {
        //IDK if I need to remove this becaue I have two now.
        if (audio.paused) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        ctx.fillStyle = "white";
        ctx.beginPath();
        for (let i = 0; i < maxFlakes; i++) {

            ctx.moveTo(flakes[i].x, flakes[i].y);
            if (audio.paused) {
                ctx.arc(flakes[i].x, flakes[i].y, flakes[i].radius, 0, Math.PI * 2, true);
            }
            else {
                ctx.arc(flakes[i].x, flakes[i].y, frequencyData[0] / 30, 0, Math.PI * 2, true);
            }

        }
        ctx.fill();
        moveFlakes();
    }

    var angle = 0;
    function moveFlakes() {
        angle += 0.01;
        for (let i = 0; i < maxFlakes; i++) {
            flakes[i].y += Math.pow(flakes[i].density, 2) + 1;
            flakes[i].x += Math.sin(angle) * .25;


            if (flakes[i].y > canvas.height) {
                flakes[i] = {
                    x: Math.random() * canvas.width,
                    y: 0,
                    radius: Math.random() * 5 + 2,
                    density: Math.random() + 1
                };
            }
        }

    }
    setInterval(drawFlakes, 25);



    //resize
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        audio.addEventListener("playing", function () {
            draw();
        })
    }
    window.onresize = resize;




    window.onload = function () {
        resize();
    }


}