"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidInstruction = void 0;
function isValidInstruction(input) {
    return ["L", "R", "M"].includes(input);
}
exports.isValidInstruction = isValidInstruction;
