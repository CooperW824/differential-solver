import { EulersMethodOptions, IDifferentialEquation } from './types';
import bigDecimal = require('js-big-decimal');

/**
 * TODO: Convert to Fixed Point Arithmetic to reduce inaccuracies in floats
 * https://stackoverflow.com/questions/1458633/how-to-deal-with-floating-point-number-precision-in-javascript
 */

export class DifferentialEquation implements IDifferentialEquation {
	differential;
	independentVarInitialCondition;
	dependentVarInitialCondition;

	constructor(
		differential: IDifferentialEquation['differential'],
		independentVarInitialCondition: number,
		dependentVarInitialCondition: number,
	) {
		this.differential = differential;
		this.independentVarInitialCondition = independentVarInitialCondition;
		this.dependentVarInitialCondition = dependentVarInitialCondition;
	}

	public eulersMethod(targetIndependentVariable: number, steps: number, options?: EulersMethodOptions): number {
		const rounding = options?.rounding || 3;
		const recursive = options?.recursive || false;

		let bdTargetIndependentVariable = new bigDecimal(targetIndependentVariable)
		let bdIndependentVarInitialCondition = new bigDecimal(this.independentVarInitialCondition)
		let bdSteps  = new bigDecimal(steps)

		let deltaX = bdTargetIndependentVariable.subtract(bdIndependentVarInitialCondition).divide(bdSteps, rounding);

		if (recursive) {
			console.log(deltaX.getValue())
			let approximation = this.recursiveEulersMethod(bdTargetIndependentVariable, deltaX);
			return Number(bigDecimal.round(approximation.getValue(), rounding));
		}

		let approximation = this.nonRecursiveEulersMethod(targetIndependentVariable, deltaX);
		return Number(bigDecimal.round(approximation, rounding));
	}

	private recursiveEulersMethod(independentVar: bigDecimal, deltaX: bigDecimal): bigDecimal {
		if (independentVar.compareTo(new bigDecimal(this.independentVarInitialCondition)) <= 0) {
			return new bigDecimal(this.dependentVarInitialCondition);
		}
		let previousIndependentVar = independentVar.subtract(deltaX);

		let dependentVar = this.recursiveEulersMethod(previousIndependentVar, deltaX);

		console.log(`x: ${previousIndependentVar.getValue()}, y:${dependentVar.getValue()}`);

		let deltaY = deltaX.multiply(
			new bigDecimal(this.differential(Number(previousIndependentVar.getValue()), Number(dependentVar.getValue()))),
		);

		return dependentVar.add(deltaY);
	}

	private nonRecursiveEulersMethod(targetIndependentVariable: number, deltaX: bigDecimal): bigDecimal {
		let calculatedDependentVariable = new bigDecimal(this.dependentVarInitialCondition);
		let i = new bigDecimal(this.independentVarInitialCondition);
		while (bigDecimal.compareTo(i, targetIndependentVariable)) {
			let derivative = this.differential(Number(i.getValue()), Number(calculatedDependentVariable.getValue()));
			let deltaY = bigDecimal.multiply(derivative, deltaX);
			calculatedDependentVariable.setValue(bigDecimal.add(calculatedDependentVariable, deltaY));
			i.setValue(bigDecimal.add(i, deltaX));
		}

		return calculatedDependentVariable;
	}

	private roundToDecimals(number: number, decimals: number): number {
		const powerOfTen = Math.pow(10, decimals);
		return Math.round(number * powerOfTen) / powerOfTen;
	}

	public evaluateDifferential(independentVar?: number, dependentVar?: number, rounding?: number): number {
		independentVar = independentVar || this.independentVarInitialCondition;
		dependentVar = dependentVar || this.dependentVarInitialCondition;
		rounding = rounding || 3;

		return this.roundToDecimals(this.differential(independentVar, dependentVar), rounding);
	}
}
