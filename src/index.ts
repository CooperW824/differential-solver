import { EulersMethodOptions, IDifferentialEquation } from './types';

export default class DifferentialEquation implements IDifferentialEquation {
	differential;
	independentVarInitialCondition;
	dependentVarInitialCondition;
	rounding: number;
	recursive: boolean;
	acceptableIndependentVarError: number;

	constructor(
		differential: IDifferentialEquation['differential'],
		independentVarInitialCondition: number,
		dependentVarInitialCondition: number,
		options?: EulersMethodOptions,
	) {
		this.differential = differential;
		this.independentVarInitialCondition = independentVarInitialCondition;
		this.dependentVarInitialCondition = dependentVarInitialCondition;
		this.rounding = options?.rounding || 3;
		this.recursive = options?.recursive || false;
		this.acceptableIndependentVarError = options?.acceptableIndependentVarError || Math.pow(10, this.rounding * -1);
	}

	public eulersMethod(targetIndependentVariable: number, steps: number, options?: EulersMethodOptions): number {
		const rounding = options?.rounding || this.rounding;
		const recursive = options?.recursive || this.recursive;

		let deltaX = (targetIndependentVariable - this.independentVarInitialCondition) / steps;

		if (recursive) {
			 let approximation = this.recursiveEulersMethod(targetIndependentVariable, deltaX, rounding);
			 return this.roundToDecimals(approximation, rounding);
		}

		let approximation = this.nonRecursiveEulersMethod(targetIndependentVariable, deltaX, rounding);
		return this.roundToDecimals(approximation, rounding);
	}

	private recursiveEulersMethod(independentVar: number, deltaX: number, rounding: number): number {
		if (independentVar - this.acceptableIndependentVarError <= this.independentVarInitialCondition) {
			console.log(`x: ${independentVar}, y:${this.dependentVarInitialCondition}`);

			return this.dependentVarInitialCondition;
		}
		let previousIndependentVar = independentVar - deltaX;

		if (previousIndependentVar - this.acceptableIndependentVarError <= this.independentVarInitialCondition) {
			previousIndependentVar = this.independentVarInitialCondition;
		}

		let dependentVar = this.recursiveEulersMethod(previousIndependentVar, deltaX, rounding);

		let deltaY = deltaX * this.differential(previousIndependentVar, dependentVar);

		return dependentVar + deltaY;
	}

	private nonRecursiveEulersMethod(targetIndependentVariable: number, deltaX: number, rounding: number): number {
		let calculatedDependentVariable = this.dependentVarInitialCondition;
		for (let i = this.independentVarInitialCondition; i < targetIndependentVariable; i = i + deltaX) {
			let derivative = this.differential(i, calculatedDependentVariable);
			let deltaY = derivative * deltaX;
			calculatedDependentVariable = calculatedDependentVariable + deltaY;
			calculatedDependentVariable = calculatedDependentVariable;
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
