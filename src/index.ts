import { EulersMethodOptions, IDifferentialEquation } from './types';


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

		let deltaX = (targetIndependentVariable - this.independentVarInitialCondition) / steps;

		if (recursive) {
			let approximation = this.recursiveEulersMethod(targetIndependentVariable, deltaX);
			return this.roundToDecimals(approximation, rounding);
		}

		let approximation = this.nonRecursiveEulersMethod(targetIndependentVariable, deltaX);
		return this.roundToDecimals(approximation, rounding);
	}

	private recursiveEulersMethod(independentVar: number, deltaX: number): number {
		if (independentVar <= this.independentVarInitialCondition) {
			return this.dependentVarInitialCondition;
		}

		let dependentVar = this.recursiveEulersMethod(independentVar - deltaX, deltaX);

        console.log(`x: ${independentVar - deltaX}, y:${dependentVar}`)

		return dependentVar + (this.differential(independentVar - deltaX, dependentVar) * deltaX);
	}

	private nonRecursiveEulersMethod(targetIndependentVariable: number, deltaX: number): number {
		let calculatedDependentVariable = this.dependentVarInitialCondition;

		for (let i = this.independentVarInitialCondition; i < targetIndependentVariable; i += deltaX) {
			let derivative = this.differential(i, calculatedDependentVariable);
			calculatedDependentVariable += derivative * deltaX;
		}

		return calculatedDependentVariable;
	}

	private roundToDecimals(number: number, decimals: number): number {
		const powerOfTen = Math.pow(10, decimals);
		return Math.round(number * powerOfTen) / powerOfTen;
	}

	public evaluateDifferential(independentVar?: number, dependentVar?: number, rounding? :number): number {
		independentVar = independentVar || this.independentVarInitialCondition;
        dependentVar = dependentVar || this.dependentVarInitialCondition
        rounding = rounding || 3

       

        return this.roundToDecimals(this.differential(independentVar, dependentVar), rounding)
	}
}
