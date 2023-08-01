"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logic_1 = require("./logic");
describe("test valid instruction", function () {
    test("try valid instrunctions", function () {
        expect((0, logic_1.isValidInstruction)("L")).toBe(true),
            expect((0, logic_1.isValidInstruction)("R")).toBe(true),
            expect((0, logic_1.isValidInstruction)("M")).toBe(true);
    }),
        test("try invalid instrunctions", function () {
            expect((0, logic_1.isValidInstruction)("")).toBe(false),
                expect((0, logic_1.isValidInstruction)("f")).toBe(false),
                expect((0, logic_1.isValidInstruction)("b")).toBe(false);
        });
});
