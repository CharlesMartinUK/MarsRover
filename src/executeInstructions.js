"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doOneCommand = exports.executeInstructions = void 0;
function executeInstructions(rover, plat, command, action) {
    if (action === void 0) { action = null; }
    for (var _i = 0, command_1 = command; _i < command_1.length; _i++) {
        var c = command_1[_i];
        doOneCommand(rover, plat, c);
        if (action != null)
            action();
    }
}
exports.executeInstructions = executeInstructions;
function doOneCommand(rover, plat, c) {
    switch (c) {
        case "L":
            rover.rotateLeft();
            break;
        case "R":
            rover.rotateRight();
            break;
        case "M":
            // y coordinates are inverted, so bottom y is 0
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
    return [rover.x, rover.y, rover.direction];
}
exports.doOneCommand = doOneCommand;
