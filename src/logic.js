"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printMap = exports.input = exports.prompt = exports.isValidInstruction = void 0;
function isValidInstruction(input) {
    return ["L", "R", "M"].includes(input);
}
exports.isValidInstruction = isValidInstruction;
exports.prompt = require('prompt-sync')();
function input(message, val) {
    //console.log(val)
    var r = [];
    outer: while (true) {
        r.length = 0; // reset
        var answer = (0, exports.prompt)(message);
        var sv = answer.split(" ");
        if (sv.length != val.length) {
            console.log("Please enter " + val.length + " items");
            continue;
        }
        for (var i = 0; i < val.length; i++) {
            //console.log("checking "+i)
            if (val[i] == "i") {
                var w = parseInt(sv[i]);
                if (isNaN(w)) {
                    console.log("number only");
                    continue outer;
                }
                else {
                    //console.log("adding number")
                    r.push(w);
                }
            }
            else {
                r.push(sv[i]);
            }
            //console.log("length is now "+ r.length)
        }
        return r;
    }
}
exports.input = input;
function printMap(px, py, width, height) {
    console.clear();
    for (var y = height; y >= 0; y--) {
        for (var x = 0; x <= width; x++) {
            if ((y == py) && (px == x))
                process.stdout.write("X");
            else
                process.stdout.write("⬛");
        }
        console.log(" "); // for newline
    }
}
exports.printMap = printMap;
