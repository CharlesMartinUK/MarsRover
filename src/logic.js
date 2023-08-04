"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printMap = exports.input = exports.validateList = exports.prompt = exports.movementsOnly = exports.directionsOnly = exports.positiveNumberWithLimit = exports.isValidInstruction = void 0;
function isValidInstruction(input) {
    return ["L", "R", "M"].includes(input);
}
exports.isValidInstruction = isValidInstruction;
function positiveNumberWithLimit(s, limit) {
    var t = parseInt(s);
    if (isNaN(t))
        throw new Error("Numbers only");
    if (t < 0)
        throw new Error("Negatives not allowed");
    if (t > limit)
        throw new Error("Number too big");
    return t;
}
exports.positiveNumberWithLimit = positiveNumberWithLimit;
function directionsOnly(s) {
    s = s.toUpperCase();
    if (/^[N|S|W|E\s]*$/.test(s) == true)
        return s;
    throw new TypeError("invalid direction N S E W only");
}
exports.directionsOnly = directionsOnly;
function movementsOnly(s) {
    s = s.toUpperCase();
    if (/^[L|R|M\s]*$/.test(s) == true)
        return s;
    throw new TypeError("invalid movment direction L R M only");
}
exports.movementsOnly = movementsOnly;
exports.prompt = require('prompt-sync')();
function validateList(sv, val) {
    var r = [];
    for (var i = 0; i < val.length; i++) {
        //console.log("checking "+i)
        if (val[i] == "i") {
            var w = parseInt(sv[i]);
            if (isNaN(w)) {
                console.log("number only");
                return [];
            }
            else if (w < 0) {
                console.log("negative numbers not allowed");
                return [];
            }
            else {
                //console.log("adding number")
                r.push(w);
            }
        }
        else {
            // only N S W E characters allowed
            if (/^[N|S|W|E\s]*$/.test(sv[i]))
                r.push(sv[i]);
            else
                return [];
        }
        //console.log("length is now "+ r.length)
    }
    return r;
}
exports.validateList = validateList;
function input(message, numP, tester) {
    //console.log(val)
    var r = [];
    while (true) {
        r.length = 0; // reset
        var answer = (0, exports.prompt)(message);
        var sv = answer.split(" ");
        if (sv.length != numP) {
            console.log("ERROR: enter " + numP + " items");
            continue;
        }
        try {
            r = tester(sv);
        }
        catch (err) {
            console.log("ERROR :", err.message);
        }
        //r = validateList(sv, val) 
        if (r.length > 0)
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
                process.stdout.write("⬛"); // ⬛
        }
        console.log(" "); // for newline
    }
}
exports.printMap = printMap;
