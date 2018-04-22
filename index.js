pixel = require("node-pixel");
var firmata = require('firmata');
console.log('process: ', process.argv);
var board = new firmata.Board('path to usb',function(){
console.log('board on');
    strip = new pixel.Strip({
        pin: 6, // this is still supported as a shorthand
        length: 4,
        firmata: board,
        controller: "FIRMATA",

    });
	console.log('strip: ', strip);
    strip.on("ready", function() {
		// do stuff with the strip here.
		console.log('strip on');
		strip.pixel(0).color("rgb(0,5,0)");
    });
});