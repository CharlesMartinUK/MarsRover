"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rover = void 0;
var Rover = /** @class */ (function () {
    function Rover(x, y, d) {
        if (d === void 0) { d = "N"; }
        this.x = x;
        this.y = y;
        this.direction = d;
    }
    Rover.prototype.rotateLeft = function () {
        var swap = { "N": "W", "W": "S", "S": "E", "E": "N" };
        this.direction = swap[this.direction];
        return this.direction;
    };
    Rover.prototype.rotateRight = function () {
        var swap = { "N": "E", "E": "S", "S": "W", "W": "N" };
        this.direction = swap[this.direction];
        return this.direction;
    };
    Rover.prototype.getDirection = function () {
        return this.direction;
    };
    return Rover;
}());
exports.Rover = Rover;
