import {DifferentialEquation} from '../ts';


test('Non-Recursive Diff Eq: x + y, y(0)=1, to y(10) in 10 steps', () => {
	const steps = 10;
	const initialIndependentVar = 0;
	const initialDependentVar = 1;
	const targetIndependentVariable = 10;

	var testDifferential = new DifferentialEquation((x, y) => x + y, initialIndependentVar, initialDependentVar);

	const stepSize = (targetIndependentVariable - initialIndependentVar) / steps;
	const test = {
		actual: testDifferential.eulersMethod(targetIndependentVariable, steps, { recursive: false }),
		expected: 2037.0,
		error: 0,
		acceptableError: Number.EPSILON / Math.sqrt(stepSize),
	};
	test.error = test.actual - test.expected;

	console.log('Test 1');
	console.table(test);

	expect(Math.abs(test.error)).toBeLessThan(test.acceptableError);
});

test('Non-Recursive Diff Eq: x + y, y(0)=1, to y(1) in 3 steps', () => {
	const steps = 3;
	const initialIndependentVar = 0;
	const initialDependentVar = 1;
	const targetIndependentVariable = 1;

	var testDifferential = new DifferentialEquation((x, y) => x + y, initialIndependentVar, initialDependentVar);

	const stepSize = (targetIndependentVariable - initialIndependentVar) / steps;
	const test = {
		actual: testDifferential.eulersMethod(targetIndependentVariable, steps, { recursive: false }),
		expected: 2.741,
		error: 0,
		acceptableError: Number.EPSILON / Math.sqrt(stepSize),
	};
	test.error = test.actual - test.expected;

	console.log('Test 2');
	console.table(test);

	expect(Math.abs(test.error)).toBeLessThan(test.acceptableError);
});

test('Non-Recursive Diff Eq: x + y, y(0)=1, to y(25) in 50 steps', () => {
	const steps = 50;
	const initialIndependentVar = 0;
	const initialDependentVar = 1;
	const targetIndependentVariable = 25;

	var testDifferential = new DifferentialEquation((x, y) => x + y, initialIndependentVar, initialDependentVar);

	const stepSize = (targetIndependentVariable - initialIndependentVar) / steps;
	const test = {
		actual: testDifferential.eulersMethod(targetIndependentVariable, steps, { recursive: false }),
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

test('Non-Recursive Diff Eq: y*Math.sin(x), y(5)=10 to y(10) in 10 steps', () => {
	const steps = 10;
	const initialIndependentVar = 5;
	const initialDependentVar = 10;
	const targetIndependentVariable = 10;

	var testDifferential = new DifferentialEquation(
		(x, y) => y * Math.sin(x),
		initialIndependentVar,
		initialDependentVar,
	);

	const stepSize = (targetIndependentVariable - initialIndependentVar) / steps;
	const test = {
		actual: testDifferential.eulersMethod(targetIndependentVariable, steps, { recursive: false }),
		expected: 15.208,
		error: 0,
		acceptableError: Number.EPSILON / Math.sqrt(stepSize),
	};
	test.error = test.actual - test.expected;

	console.log('Test 4');
	console.table(test);

	expect(Math.abs(test.error)).toBeLessThan(test.acceptableError);
});

test('Non-Recursive Diff Eq: y*Math.sin(x), y(0)=1, to y(1) in 3 steps', () => {
	const steps = 3;
	const initialIndependentVar = 0;
	const initialDependentVar = 1;
	const targetIndependentVariable = 1;

	var testDifferential = new DifferentialEquation(
		(x, y) => y * Math.sin(x),
		initialIndependentVar,
		initialDependentVar,
	);

	const stepSize = (targetIndependentVariable - initialIndependentVar) / steps;
	const test = {
		actual: testDifferential.eulersMethod(targetIndependentVariable, steps, { recursive: false }),
		expected: 1.338,
		error: 0,
		acceptableError: Number.EPSILON / Math.sqrt(stepSize),
	};
	test.error = test.actual - test.expected;

	console.log('Test 5');
	console.table(test);

	expect(Math.abs(test.error)).toBeLessThan(test.acceptableError);
});

test('Non-Recursive Diff Eq: y*Math.sin(x), y(0)=1, to y(25) in 50 steps', () => {
	const steps = 50;
	const initialIndependentVar = 0;
	const initialDependentVar = 1;
	const targetIndependentVariable = 25;

	var testDifferential = new DifferentialEquation(
		(x, y) => y * Math.sin(x),
		initialIndependentVar,
		initialDependentVar,
	);

	const stepSize = (targetIndependentVariable - initialIndependentVar) / steps;
	const test = {
		actual: testDifferential.eulersMethod(targetIndependentVariable, steps, { recursive: false }),
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

test('Non-Recursive Diff Eq: x + y, y(0)=1, to y(10) in 10 steps, rounding: 7', () => {
	const steps = 10;
	const initialIndependentVar = 0;
	const initialDependentVar = 1;
	const targetIndependentVariable = 10;

	var testDifferential = new DifferentialEquation((x, y) => x + y, initialIndependentVar, initialDependentVar);

	const stepSize = (targetIndependentVariable - initialIndependentVar) / steps;
	const test = {
		actual: testDifferential.eulersMethod(targetIndependentVariable, steps, { recursive: false, rounding: 7 }),
		expected: 2037.0,
		error: 0,
		acceptableError: Number.EPSILON / Math.sqrt(stepSize),
	};
	test.error = test.actual - test.expected;

	console.log('Test 1');
	console.table(test);

	expect(Math.abs(test.error)).toBeLessThan(test.acceptableError);
});

test('Non-Recursive Diff Eq: x + y, y(0)=1, to y(1) in 3 steps, rounding: 7', () => {
	const steps = 3;
	const initialIndependentVar = 0;
	const initialDependentVar = 1;
	const targetIndependentVariable = 1;

	var testDifferential = new DifferentialEquation((x, y) => x + y, initialIndependentVar, initialDependentVar);

	const stepSize = (targetIndependentVariable - initialIndependentVar) / steps;
	const test = {
		actual: testDifferential.eulersMethod(targetIndependentVariable, steps, { recursive: false, rounding: 7 }),
		expected: 2.7407407,
		error: 0,
		acceptableError: Number.EPSILON / Math.sqrt(stepSize),
	};
	test.error = test.actual - test.expected;

	console.log('Test 2');
	console.table(test);

	expect(Math.abs(test.error)).toBeLessThan(test.acceptableError);
});

test('Non-Recursive Diff Eq: x + y, y(0)=1, to y(25) in 50 steps, rounding: 7', () => {
	const steps = 50;
	const initialIndependentVar = 0;
	const initialDependentVar = 1;
	const targetIndependentVariable = 25;

	var testDifferential = new DifferentialEquation((x, y) => x + y, initialIndependentVar, initialDependentVar);

	const stepSize = (targetIndependentVariable - initialIndependentVar) / steps;
	const test = {
		actual: testDifferential.eulersMethod(targetIndependentVariable, steps, { recursive: false, rounding: 7 }),
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

test('Non-Recursive Diff Eq: y*Math.sin(x), y(5)=10 to y(10) in 10 steps, rounding: 7', () => {
	const steps = 10;
	const initialIndependentVar = 5;
	const initialDependentVar = 10;
	const targetIndependentVariable = 10;

	var testDifferential = new DifferentialEquation(
		(x, y) => y * Math.sin(x),
		initialIndependentVar,
		initialDependentVar,
	);

	const stepSize = (targetIndependentVariable - initialIndependentVar) / steps;
	const test = {
		actual: testDifferential.eulersMethod(targetIndependentVariable, steps, { recursive: false, rounding: 7 }),
		expected: 15.2083415,
		error: 0,
		acceptableError: Number.EPSILON / Math.sqrt(stepSize),
	};
	test.error = test.actual - test.expected;

	console.log('Test 4');
	console.table(test);

	expect(Math.abs(test.error)).toBeLessThan(test.acceptableError);
});

test('Non-Recursive Diff Eq: y*Math.sin(x), y(0)=1, to y(1) in 3 steps, rounding: 7', () => {
	const steps = 3;
	const initialIndependentVar = 0;
	const initialDependentVar = 1;
	const targetIndependentVariable = 1;

	var testDifferential = new DifferentialEquation(
		(x, y) => y * Math.sin(x),
		initialIndependentVar,
		initialDependentVar,
	);

	const stepSize = (targetIndependentVariable - initialIndependentVar) / steps;
	const test = {
		actual: testDifferential.eulersMethod(targetIndependentVariable, steps, { recursive: false, rounding: 7 }),
		expected: 1.337669,
		error: 0,
		acceptableError: Number.EPSILON / Math.sqrt(stepSize),
	};
	test.error = test.actual - test.expected;

	console.log('Test 5');
	console.table(test);

	expect(Math.abs(test.error)).toBeLessThan(test.acceptableError);
});

test('Non-Recursive Diff Eq: y*Math.sin(x), y(0)=1, to y(25) in 50 steps, rounding: 7', () => {
	const steps = 50;
	const initialIndependentVar = 0;
	const initialDependentVar = 1;
	const targetIndependentVariable = 25;

	var testDifferential = new DifferentialEquation(
		(x, y) => y * Math.sin(x),
		initialIndependentVar,
		initialDependentVar,
	);

	const stepSize = (targetIndependentVariable - initialIndependentVar) / steps;
	const test = {
		actual: testDifferential.eulersMethod(targetIndependentVariable, steps, { recursive: false, rounding: 7 }),
		expected: 0.0320422,
		error: 0,
		acceptableError: Number.EPSILON / Math.sqrt(stepSize),
	};

	test.error = test.actual - test.expected;

	console.log('Test 6');
	console.table(test);

	expect(Math.abs(test.error)).toBeLessThan(test.acceptableError);
});
