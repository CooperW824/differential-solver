export interface IDifferentialEquation {
	differential: (independentVar: number, dependentVar: number) => number;
	independentVarInitialCondition: number;
	dependentVarInitialCondition: number;
	eulersMethod: (targetIndependentVariable: number, steps: number, options?: EulersMethodOptions) => number;
	evaluateDifferential: (independentVar?: number, dependentVar?: number) => number;
}

export interface EulersMethodOptions {
	recursive?: boolean;
	rounding?: number;
	acceptableIndependentVarError? : number,
}
