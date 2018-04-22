pixel = require("node-pixel");
var firmata = require('firmata');

var board = new firmata.Board('path to usb',function(){

    strip = new pixel.Strip({
        pin: 6, // this is still supported as a shorthand
        length: 4,
        firmata: board,
        controller: "FIRMATA",

    });

    strip.on("ready", function() {
        // do stuff with the strip here.
    });
});