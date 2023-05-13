"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = __importDefault(require("../src"));
test('Recursive Diff Eq: x + y, y(0)=1, to y(10) in 10 steps', () => {
    const steps = 10;
    const initialIndependentVar = 0;
    const initialDependentVar = 1;
    const targetIndependentVariable = 10;
    var testDifferential = new src_1.default((x, y) => x + y, initialIndependentVar, initialDependentVar);
    const stepSize = (targetIndependentVariable - initialIndependentVar) / steps;
    const test = {
        actual: testDifferential.eulersMethod(targetIndependentVariable, steps, { recursive: true }),
        expected: 2037.0,
        error: 0,
        acceptableError: Number.EPSILON / Math.sqrt(stepSize),
    };
    test.error = test.actual - test.expected;
    console.log('Test 1');
    console.table(test);
    expect(Math.abs(test.error)).toBeLessThan(test.acceptableError);
});
test('Recursive Diff Eq: x + y, y(0)=1, to y(1) in 3 steps', () => {
    const steps = 3;
    const initialIndependentVar = 0;
    const initialDependentVar = 1;
    const targetIndependentVariable = 1;
    var testDifferential = new src_1.default((x, y) => x + y, initialIndependentVar, initialDependentVar);
    const stepSize = (targetIndependentVariable - initialIndependentVar) / steps;
    const test = {
        actual: testDifferential.eulersMethod(targetIndependentVariable, steps, { recursive: true }),
        expected: 2.741,
        error: 0,
        acceptableError: Number.EPSILON / Math.sqrt(stepSize),
    };
    test.error = test.actual - test.expected;
    console.log('Test 2');
    console.table(test);
    expect(Math.abs(test.error)).toBeLessThan(test.acceptableError);
});
test('Recursive Diff Eq: x + y, y(0)=1, to y(25) in 50 steps', () => {
    const steps = 50;
    const initialIndependentVar = 0;
    const initialDependentVar = 1;
    const targetIndependentVariable = 25;
    var testDifferential = new src_1.default((x, y) => x + y, initialIndependentVar, initialDependentVar);
    const stepSize = (targetIndependentVariable - initialIndependentVar) / steps;
    const test = {
        actual: testDifferential.eulersMethod(targetIndependentVariable, steps, { recursive: true }),
        expected: 1275242974.428,
        error: 0,
        acceptableError: Number.EPSILON / Math.sqrt(stepSize),
    };
    test.error = test.actual - test.expected;
    console.log('Test 3');
    console.table(test);
    expect(Math.abs(test.error)).toBeLessThan(test.acceptableError);
});
// -- dy/dx = y*sin(x)
test('Recursive Diff Eq: y*Math.sin(x), y(5)=10 to y(10) in 10 steps', () => {
    const steps = 10;
    const initialIndependentVar = 5;
    const initialDependentVar = 10;
    const targetIndependentVariable = 10;
    var testDifferential = new src_1.default((x, y) => y * Math.sin(x), initialIndependentVar, initialDependentVar);
    const stepSize = (targetIndependentVariable - initialIndependentVar) / steps;
    const test = {
        actual: testDifferential.eulersMethod(targetIndependentVariable, steps, { recursive: true }),
        expected: 15.208,
        error: 0,
        acceptableError: Number.EPSILON / Math.sqrt(stepSize),
    };
    test.error = test.actual - test.expected;
    console.log('Test 4');
    console.table(test);
    expect(Math.abs(test.error)).toBeLessThan(test.acceptableError);
});
test('Recursive Diff Eq: y*Math.sin(x), y(0)=1, to y(1) in 3 steps', () => {
    const steps = 3;
    const initialIndependentVar = 0;
    const initialDependentVar = 1;
    const targetIndependentVariable = 1;
    var testDifferential = new src_1.default((x, y) => y * Math.sin(x), initialIndependentVar, initialDependentVar);
    const stepSize = (targetIndependentVariable - initialIndependentVar) / steps;
    const test = {
        actual: testDifferential.eulersMethod(targetIndependentVariable, steps, { recursive: true }),
        expected: 1.338,
        error: 0,
        acceptableError: Number.EPSILON / Math.sqrt(stepSize),
    };
    test.error = test.actual - test.expected;
    console.log('Test 5');
    console.table(test);
    expect(Math.abs(test.error)).toBeLessThan(test.acceptableError);
});
test('Recursive Diff Eq: y*Math.sin(x), y(0)=1, to y(25) in 50 steps', () => {
    const steps = 50;
    const initialIndependentVar = 0;
    const initialDependentVar = 1;
    const targetIndependentVariable = 25;
    var testDifferential = new src_1.default((x, y) => y * Math.sin(x), initialIndependentVar, initialDependentVar);
    const stepSize = (targetIndependentVariable - initialIndependentVar) / steps;
    const test = {
        actual: testDifferential.eulersMethod(targetIndependentVariable, steps, { recursive: true }),
        expected: 0.032,
        error: 0,
        acceptableError: Number.EPSILON / Math.sqrt(stepSize),
    };
    test.error = test.actual - test.expected;
    console.log('Test 6');
    console.table(test);
    expect(Math.abs(test.error)).toBeLessThan(test.acceptableError);
});
// -- Previous Tests with more accuracy, 7 decimal places
test('Recursive Diff Eq: x + y, y(0)=1, to y(10) in 10 steps, rounding: 7', () => {
    const steps = 10;
    const initialIndependentVar = 0;
    const initialDependentVar = 1;
    const targetIndependentVariable = 10;
    var testDifferential = new src_1.default((x, y) => x + y, initialIndependentVar, initialDependentVar);
    const stepSize = (targetIndependentVariable - initialIndependentVar) / steps;
    const test = {
        actual: testDifferential.eulersMethod(targetIndependentVariable, steps, { recursive: true, rounding: 7 }),
        expected: 2037.0,
        error: 0,
        acceptableError: Number.EPSILON / Math.sqrt(stepSize),
    };
    test.error = test.actual - test.expected;
    console.log('Test 1');
    console.table(test);
    expect(Math.abs(test.error)).toBeLessThan(test.acceptableError);
});
test('Recursive Diff Eq: x + y, y(0)=1, to y(1) in 3 steps, rounding: 7', () => {
    const steps = 3;
    const initialIndependentVar = 0;
    const initialDependentVar = 1;
    const targetIndependentVariable = 1;
    var testDifferential = new src_1.default((x, y) => x + y, initialIndependentVar, initialDependentVar);
    const stepSize = (targetIndependentVariable - initialIndependentVar) / steps;
    const test = {
        actual: testDifferential.eulersMethod(targetIndependentVariable, steps, { recursive: true, rounding: 7 }),
        expected: 2.7407407,
        error: 0,
        acceptableError: Number.EPSILON / Math.sqrt(stepSize),
    };
    test.error = test.actual - test.expected;
    console.log('Test 2');
    console.table(test);
    expect(Math.abs(test.error)).toBeLessThan(test.acceptableError);
});
test('Recursive Diff Eq: x + y, y(0)=1, to y(25) in 50 steps, rounding: 7', () => {
    const steps = 50;
    const initialIndependentVar = 0;
    const initialDependentVar = 1;
    const targetIndependentVariable = 25;
    var testDifferential = new src_1.default((x, y) => x + y, initialIndependentVar, initialDependentVar);
    const stepSize = (targetIndependentVariable - initialIndependentVar) / steps;
    const test = {
        actual: testDifferential.eulersMethod(targetIndependentVariable, steps, { recursive: true, rounding: 7 }),
        expected: 1275242974.4280992,
        error: 0,
        acceptableError: Number.EPSILON / Math.sqrt(stepSize),
    };
    test.error = test.actual - test.expected;
    console.log('Test 3');
    console.table(test);
    expect(Math.abs(test.error)).toBeLessThan(test.acceptableError);
});
// -- dy/dx = y*sin(x)
test('Recursive Diff Eq: y*Math.sin(x), y(5)=10 to y(10) in 10 steps, rounding: 7', () => {
    const steps = 10;
    const initialIndependentVar = 5;
    const initialDependentVar = 10;
    const targetIndependentVariable = 10;
    var testDifferential = new src_1.default((x, y) => y * Math.sin(x), initialIndependentVar, initialDependentVar);
    const stepSize = (targetIndependentVariable - initialIndependentVar) / steps;
    const test = {
        actual: testDifferential.eulersMethod(targetIndependentVariable, steps, { recursive: true, rounding: 7 }),
        expected: 15.2083415,
        error: 0,
        acceptableError: Number.EPSILON / Math.sqrt(stepSize),
    };
    test.error = test.actual - test.expected;
    console.log('Test 4');
    console.table(test);
    expect(Math.abs(test.error)).toBeLessThan(test.acceptableError);
});
test('Recursive Diff Eq: y*Math.sin(x), y(0)=1, to y(1) in 3 steps, rounding: 7', () => {
    const steps = 3;
    const initialIndependentVar = 0;
    const initialDependentVar = 1;
    const targetIndependentVariable = 1;
    var testDifferential = new src_1.default((x, y) => y * Math.sin(x), initialIndependentVar, initialDependentVar);
    const stepSize = (targetIndependentVariable - initialIndependentVar) / steps;
    const test = {
        actual: testDifferential.eulersMethod(targetIndependentVariable, steps, { recursive: true, rounding: 7 }),
        expected: 1.3376690,
        error: 0,
        acceptableError: Number.EPSILON / Math.sqrt(stepSize),
    };
    test.error = test.actual - test.expected;
    console.log('Test 5');
    console.table(test);
    expect(Math.abs(test.error)).toBeLessThan(test.acceptableError);
});
test('Recursive Diff Eq: y*Math.sin(x), y(0)=1, to y(25) in 50 steps, rounding: 7', () => {
    const steps = 50;
    const initialIndependentVar = 0;
    const initialDependentVar = 1;
    const targetIndependentVariable = 25;
    var testDifferential = new src_1.default((x, y) => y * Math.sin(x), initialIndependentVar, initialDependentVar);
    const stepSize = (targetIndependentVariable - initialIndependentVar) / steps;
    const test = {
        actual: testDifferential.eulersMethod(targetIndependentVariable, steps, { recursive: true, rounding: 7 }),
        expected: 0.0320422,
        error: 0,
        acceptableError: Number.EPSILON / Math.sqrt(stepSize),
    };
    test.error = test.actual - test.expected;
    console.log('Test 6');
    console.table(test);
    expect(Math.abs(test.error)).toBeLessThan(test.acceptableError);
});
