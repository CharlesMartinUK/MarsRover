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
        switch (this.direction) {
            case "N":
                this.direction = "W";
                break;
            case "W":
                this.direction = "S";
                break;
            case "S":
                this.direction = "E";
                break;
            case "E":
                this.direction = "N";
                break;
        }
        return this.direction;
    };
    Rover.prototype.rotateRight = function () {
        switch (this.direction) {
            case "N":
                this.direction = "E";
                break;
            case "E":
                this.direction = "S";
                break;
            case "S":
                this.direction = "W";
                break;
            case "W":
                this.direction = "N";
                break;
        }
        return this.direction;
    };
    Rover.prototype.getDirection = function () {
        return this.direction;
    };
    return Rover;
}());
exports.Rover = Rover;
