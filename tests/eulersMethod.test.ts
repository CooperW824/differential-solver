import { DifferentialEquation } from '../src';

test('Recursive Eulers Method on Diff Eq: x + y, initial condition y(0)=1, to y(10) in 10 steps', () => {
	const steps = 10;
	const initialIndependentVar = 0;
	const initialDependentVar = 1;
	const targetIndependentVariable = 10;

	var testDifferential = new DifferentialEquation((x, y) => x + y, initialIndependentVar, initialDependentVar);

	const stepSize = (targetIndependentVariable - initialIndependentVar) / steps;
	const test = {
		actual: testDifferential.eulersMethod(targetIndependentVariable, steps),
		expected: 2037.0,
		error: 0,
		acceptableError: Number.EPSILON / Math.sqrt(stepSize),
	};
	test.error = test.actual - test.expected;

	console.log('Test 1');
	console.table(test);

	expect(Math.abs(test.error)).toBeLessThan(test.acceptableError);
});

test('Eulers Method on Diff Eq: x + y, initial condition y(0)=1, to y(1) in 3 steps', () => {
	const steps = 3;
	const initialIndependentVar = 0;
	const initialDependentVar = 1;
	const targetIndependentVariable = 1;

	var testDifferential = new DifferentialEquation((x, y) => x + y, initialIndependentVar, initialDependentVar);

	const stepSize = (targetIndependentVariable - initialIndependentVar) / steps;
	const test = {
		actual: testDifferential.eulersMethod(targetIndependentVariable, steps, {recursive: true}),
		expected: 2.741,
		error: 0,
		acceptableError: Number.EPSILON / Math.sqrt(stepSize),
	};
	test.error = test.actual - test.expected;

	console.log('Test 2');
	console.table(test);

	expect(Math.abs(test.error)).toBeLessThan(test.acceptableError);
});

test('Recursive Eulers Method on Diff Eq: x + y, initial condition y(0)=1, to y(25) in 50 steps', () => {
	const steps = 50;
	const initialIndependentVar = 0;
	const initialDependentVar = 1;
	const targetIndependentVariable = 25;

	var testDifferential = new DifferentialEquation((x, y) => x + y, initialIndependentVar, initialDependentVar);

	const stepSize = (targetIndependentVariable - initialIndependentVar) / steps;
	const test = {
		actual: testDifferential.eulersMethod(targetIndependentVariable, steps),
		expected: 1275242974.428,
		error: 0,
		acceptableError: Number.EPSILON / Math.sqrt(stepSize),
	};

	test.error = test.actual - test.expected;

	console.log('Test 3');
	console.table(test);

	expect(Math.abs(test.error)).toBeLessThan(test.acceptableError);
});
