"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rover_1 = require("./rover");
var plateau_1 = require("./plateau");
var logic_1 = require("./logic");
var sleep = require('system-sleep');
function main() {
    var platDim = (0, logic_1.input)('Input width and height of Plateau (eg 5 5): ', 2, function (list) {
        return [(0, logic_1.positiveNumberWithLimit)(list[0], 10), (0, logic_1.positiveNumberWithLimit)(list[1], 10)];
    });
    var plat = new plateau_1.Plateau(Number(platDim[0]), Number(platDim[1]));
    while (true) { // loop for each rover
        console.log("*********** ROVER INPUT *************");
        var firstLine = (0, logic_1.input)('Input x y and inital direction (eg 1 2 N): ', 3, function (list) {
            return [(0, logic_1.positiveNumberWithLimit)(list[0], plat.width),
                (0, logic_1.positiveNumberWithLimit)(list[1], plat.height),
                (0, logic_1.directionsOnly)(list[2])
            ];
        });
        var secondLine = (0, logic_1.input)('Movement directions (eg LMMRLLR): ', 1, function (list) {
            return [(0, logic_1.movementsOnly)(list[0])];
        });
        var rover = new rover_1.Rover(Number(firstLine[0]), Number(firstLine[1]), String(firstLine[2]));
        for (var _i = 0, _a = String(secondLine); _i < _a.length; _i++) {
            var c = _a[_i];
            switch (c) {
                case "L":
                    rover.rotateLeft();
                    break;
                case "R":
                    rover.rotateRight();
                    break;
                case "M":
                    // y coordinates are inverted bottom y is 0
                    switch (rover.direction) { // note plat width of 5 is 0 - 5 (5 is valid)
                        case "N":
                            if ((rover.y += 1) > plat.height)
                                rover.y = 0;
                            break;
                        case "S":
                            if ((rover.y -= 1) < 0)
                                rover.y = plat.height;
                            break;
                        case "W":
                            if ((rover.x -= 1) < 0)
                                rover.x = plat.width;
                            break;
                        case "E":
                            if ((rover.x += 1) > plat.width)
                                rover.x = 0;
                            break;
                    }
                    break;
            }
            (0, logic_1.printMap)(rover.x, rover.y, plat.width, plat.height);
            console.log("CURRENT: Rover End Position and direction", rover.x, " ", rover.y, " ", rover.direction);
            sleep(1000);
        }
        console.log("Rover End Position and direction", rover.x, " ", rover.y, " ", rover.direction);
    }
}
main();
