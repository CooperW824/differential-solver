"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = __importDefault(require("../src"));
var testDifferential = new src_1.default((x, y) => x + y, 0, 1);
// Rounding Tests
test("Testing rounding 1.5463 to 3 decimals ", () => {
    expect(src_1.default.prototype['roundToDecimals'](1.5463, 3)).toEqual(1.546);
});
test("Testing rounding 1.5467 to 3 decimals ", () => {
    expect(src_1.default.prototype['roundToDecimals'](1.5467, 3)).toEqual(1.547);
});
test("Testing rounding 1.5463 to 2 decimals ", () => {
    expect(src_1.default.prototype['roundToDecimals'](1.5463, 2)).toEqual(1.55);
});
test("Testing rounding 1.5437 to 2 decimals ", () => {
    expect(src_1.default.prototype['roundToDecimals'](1.5437, 2)).toEqual(1.54);
});
