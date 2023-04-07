import { DifferentialEquation } from '../src';

var testDifferential = new DifferentialEquation((x,y) => x + y, 0, 1)

// Rounding Tests

test("Testing rounding 1.5463 to 3 decimals ", () => {
    expect(DifferentialEquation.prototype['roundToDecimals'](1.5463, 3)).toEqual(1.546)
})

test("Testing rounding 1.5467 to 3 decimals ", () => {
    expect(DifferentialEquation.prototype['roundToDecimals'](1.5467, 3)).toEqual(1.547)
})

test("Testing rounding 1.5463 to 2 decimals ", () => {
    expect(DifferentialEquation.prototype['roundToDecimals'](1.5463, 2)).toEqual(1.55)
})

test("Testing rounding 1.5437 to 2 decimals ", () => {
    expect(DifferentialEquation.prototype['roundToDecimals'](1.5437, 2)).toEqual(1.54)
})
