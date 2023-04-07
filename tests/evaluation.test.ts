import { DifferentialEquation } from '../src';

var test1 = new DifferentialEquation((x, y) => x + y, 0, 1);

test('Evaluate Diff Eq: x + y, initial condition y(0) = 1, current vars y(2) = 1 ', () => {
	expect(test1.evaluateDifferential(2, 1)).toEqual(3);
});

test('Evaluate Diff Eq: x + y, initial condition y(0) = 1 ', () => {
	expect(test1.evaluateDifferential()).toEqual(1);
});

var test2 = new DifferentialEquation(
	(x, y) => {
		return Math.pow(x, 2) + Math.sin(y);
	},
	10.124,
	5.368,
);

test('Evaluate Diff Eq: x^2 + sin(y), initial condition y(10.124) = 5.368, current vars y(2) = 1 ', () => {
	expect(test2.evaluateDifferential(2, 1, 5)).toEqual(4.84147);
});

test('Evaluate Diff Eq: x^2 + sin(y), initial condition y(0) = 1, current vars y(2) = 1 ', () => {
	expect(test2.evaluateDifferential(undefined, undefined, 4)).toEqual(101.7027);
});
