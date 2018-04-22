pixel = require("node-pixel");
five = require("johnny-five");

var board = new five.Board(this);

board.on("ready", function() {
    strip = new pixel.Strip({
        board: this,
        controller: "I2CBACKPACK",
        strips: [4, 6, 8], // 3 physical strips on pins 0, 1 & 2 with lengths 4, 6 & 8.
    });

    strip.on("ready", function() {
        // do stuff with the strip here.
		console.log('strip is on');
    });
});