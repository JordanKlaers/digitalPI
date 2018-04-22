var pixel = require("node-pixel");
var five = require("johnny-five");
var Raspi = require("raspi-io");

var board = new five.Board({
  io: new Raspi()
});
console.log('board made');
board.on("ready", function() {
	console.log('board on');
    strip = new pixel.Strip({
        board: this,
        controller: "I2CBACKPACK",
        strips: [144], // 3 physical strips on pins 0, 1 & 2 with lengths 4, 6 & 8.
    });

    strip.on("ready", function() {
        // do stuff with the strip here.
		console.log('strip is on');
    });
});