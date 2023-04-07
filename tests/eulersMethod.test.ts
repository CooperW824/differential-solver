import { DifferentialEquation } from '../src';

var test1 = new DifferentialEquation(
	(x, y) => {
		return x + y;
	},
	0,
	1,
);

// test('Recursive Eulers Method on Diff Eq: x + y, initial condition y(0)=1, to y(10) in 10 steps', () => {
// 	expect(test1.eulersMethod(10, 10, { recursive: true })).toEqual(2037.0);
// });

test('Recursive Eulers Method on Diff Eq: x + y, initial condition y(0)=1, to y(10) in 30 steps', () => {
	expect(test1.eulersMethod(10, 30, { recursive: true, rounding: 5 })).toEqual(14921.10846);
});


// test('Recursive Eulers Method on Diff Eq: x + y, initial condition y(0)=1, to y(25) in 50 steps', () => {
// 	expect(test1.eulersMethod(25, 50, { recursive: true })).toEqual(1275242974.428);
// });



