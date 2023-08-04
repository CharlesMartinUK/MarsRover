"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rover_1 = require("./rover");
var plateau_1 = require("./plateau");
var executeInstructions_1 = require("./executeInstructions");
var logic_1 = require("./logic");
var sleep = require('system-sleep');
var platDim = (0, logic_1.input)('Input width and height of Plateau (eg 5 5): ', 2, function (list) {
    return [(0, logic_1.positiveNumberWithLimit)(list[0], 10), (0, logic_1.positiveNumberWithLimit)(list[1], 10)];
});
var plat = new plateau_1.Plateau(Number(platDim[0]), Number(platDim[1]));
var _loop_1 = function () {
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
    (0, executeInstructions_1.executeInstructions)(rover, plat, String(secondLine), function () {
        (0, logic_1.printMap)(rover.x, rover.y, plat.width, plat.height);
        console.log("CURRENT: Rover End Position and direction", rover.x, " ", rover.y, " ", rover.direction);
        sleep(1000);
    });
};
while (true) {
    _loop_1();
}
