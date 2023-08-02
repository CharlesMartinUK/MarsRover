"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plateau = void 0;
var Plateau = /** @class */ (function () {
    function Plateau(width, height) {
        this.grid = new Array(height).fill(0).map(function () { return new Array(width).fill(0); });
        this.width = width;
        this.height = height;
    }
    Plateau.prototype.move = function (x, y, mx, my) {
        var nx = x + mx;
        //console.log(x," ",mx, " ",nx)
        if (nx < 0)
            nx = this.width + nx;
        else if (nx >= this.width)
            nx -= this.width;
        var ny = y + my;
        if (ny < 0)
            ny = this.height + ny;
        else if (ny >= this.height)
            ny -= this.height;
        //console.log(nx," ",ny)
        return [nx, ny];
    };
    return Plateau;
}());
exports.Plateau = Plateau;
