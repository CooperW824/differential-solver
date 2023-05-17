import { EulersMethodOptions, IDifferentialEquation } from './types';
export declare class DifferentialEquation implements IDifferentialEquation {
    differential: (independentVar: number, dependentVar: number) => number;
    independentVarInitialCondition: number;
    dependentVarInitialCondition: number;
    rounding: number;
    recursive: boolean;
    acceptableIndependentVarError: number;
    /**
     * Creates a new differential equation solver instance
     * @param differential The differential equation represented as a function. Ex (x, y) => x + y
     * @param independentVarInitialCondition The initial condition for the independent variable (x value)
     * @param dependentVarInitialCondition The initial condition for the dependent variable (y value)
     * @param options (optional) an object that fits EulersMethodOptions type
     */
    constructor(differential: IDifferentialEquation['differential'], independentVarInitialCondition: number, dependentVarInitialCondition: number, options?: EulersMethodOptions);
    /**
     * Calculates approximate solutions to the given differential equation using Euler's method
     * @param targetIndependentVariable The desired independent variable (x value) to solve for
     * @param steps The number of iterations to be performed in Eulers method, setting this higher improves accuracy at cost of speed
     * @param options (optional) An object that fits the Euler's method type
     * @returns {number} The solution from euler's method
     */
    eulersMethod(targetIndependentVariable: number, steps: number, options?: EulersMethodOptions): number;
    /**
     * Calculates the approximate solution to a given independentVar using recursive methods
     * @param independentVar Independent Var to calculate the dependent var for
     * @param deltaX The step size
     * @returns the dependent variable value for the given independent variable
     */
    private recursiveEulersMethod;
    /**
     * Finds approximate solutions to a differential equation using a non-recursive version of Euler's method
     * @param targetIndependentVariable The desired independent variable to calculate Euler's method for
     * @param deltaX The step size
     * @returns The approximate solution to the given the differential equation for the target independent variable
     */
    private nonRecursiveEulersMethod;
    /**
     * Rounds a number to a desired number of decimal places
     * @param number The number to round
     * @param decimals The number of decimal places to keep
     * @returns The rounded number
     */
    private roundToDecimals;
    /**
     * Evaluates dy/dx for the given differential
     * @param independentVar (optional) the x value to use in dy/dx, if no value is given, the initial condition is used
     * @param dependentVar (optional) the y value to use in dy/dx, if no value is given, the initial condition is used
     * @param rounding (optional) the desired number of decimal places, if no value is given, the number will not be rounded
     * @returns the value of dy/dx for the given inputs
     */
    evaluateDifferential(independentVar?: number, dependentVar?: number, rounding?: number): number;
}
