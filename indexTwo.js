var pixel = require("node-pixel");
var five = require("johnny-five");
var Raspi = require("raspi-io");

var board = new five.Board({
  io: new Raspi()
});
console.log('board made');
board.on("ready", function() {
	console.log('board on');
    var strip = new pixel.Strip({
		data: 6,
        board: this,
        controller: "I2CBACKPACK",
        length: 144 // 3 physical strips on pins 0, 1 & 2 with lengths 4, 6 & 8.
    });
	console.log('strip?: ', strip);
    strip.on("ready", function() {
		// do stuff with the strip here.
		console.log('strip is on');
		strip.pixel(0).color("rgb(0,5,0)");
		console.log('strip sent color');
		
    });
});