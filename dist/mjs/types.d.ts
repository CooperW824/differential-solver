export interface IDifferentialEquation {
    differential: (independentVar: number, dependentVar: number) => number;
    independentVarInitialCondition: number;
    dependentVarInitialCondition: number;
    eulersMethod: (targetIndependentVariable: number, steps: number, options?: EulersMethodOptions) => number;
    evaluateDifferential: (independentVar?: number, dependentVar?: number) => number;
}
export interface EulersMethodOptions {
    /**
     * Should the recursive or non-recursive version of the algorithm be used.
     * Defaults to `false`
     */
    recursive?: boolean;
    /**
     * How many decimal places to round the result to.
     *  Defaults to `3`
     */
    rounding?: number;
    /**
     * Acceptable amount of floating point error in the recursive algorithm.
     * Does not need to be defined for the non-recursive version of the algorithm.
     * Defaults to `Math.Pow(10, rounding * -1)`
     */
    acceptableIndependentVarError?: number;
}
