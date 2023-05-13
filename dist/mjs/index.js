export default class DifferentialEquation {
    differential;
    independentVarInitialCondition;
    dependentVarInitialCondition;
    rounding;
    recursive;
    acceptableIndependentVarError;
    /**
     * Creates a new differential equation solver instance
     * @param differential The differential equation represented as a function. Ex (x, y) => x + y
     * @param independentVarInitialCondition The initial condition for the independent variable (x value)
     * @param dependentVarInitialCondition The initial condition for the dependent variable (y value)
     * @param options (optional) an object that fits EulersMethodOptions type
     */
    constructor(differential, independentVarInitialCondition, dependentVarInitialCondition, options) {
        this.differential = differential;
        this.independentVarInitialCondition = independentVarInitialCondition;
        this.dependentVarInitialCondition = dependentVarInitialCondition;
        this.rounding = options?.rounding || 3;
        this.recursive = options?.recursive || false;
        this.acceptableIndependentVarError = options?.acceptableIndependentVarError || Math.pow(10, this.rounding * -1);
    }
    /**
     * Calculates approximate solutions to the given differential equation using Euler's method
     * @param targetIndependentVariable The desired independent variable (x value) to solve for
     * @param steps The number of iterations to be performed in Eulers method, setting this higher improves accuracy at cost of speed
     * @param options (optional) An object that fits the Euler's method type
     * @returns {number} The solution from euler's method
     */
    eulersMethod(targetIndependentVariable, steps, options) {
        const rounding = options?.rounding || this.rounding;
        const recursive = options?.recursive || this.recursive;
        // the change in X is calculated by taking the overall difference between target and initial
        // then dividing that by the number of steps
        let deltaX = (targetIndependentVariable - this.independentVarInitialCondition) / steps;
        if (recursive) {
            let approximation = this.recursiveEulersMethod(targetIndependentVariable, deltaX);
            return this.roundToDecimals(approximation, rounding);
        }
        let approximation = this.nonRecursiveEulersMethod(targetIndependentVariable, deltaX);
        return this.roundToDecimals(approximation, rounding);
    }
    /**
     * Calculates the approximate solution to a given independentVar using recursive methods
     * @param independentVar Independent Var to calculate the dependent var for
     * @param deltaX The step size
     * @returns the dependent variable value for the given independent variable
     */
    recursiveEulersMethod(independentVar, deltaX) {
        let dependentVar;
        let previousIndependentVar = independentVar - deltaX;
        // If the next round of the recursive function is going to hit the conditional,
        // we set the previousIndependentVar and dependentVar to our initial condition
        // exiting the recursive loop
        if (previousIndependentVar - this.acceptableIndependentVarError <= this.independentVarInitialCondition) {
            previousIndependentVar = this.independentVarInitialCondition;
            dependentVar = this.dependentVarInitialCondition;
        }
        else {
            // to get the previous dependentVar (y-value) for this step in eulers method
            // we do the previous step
            dependentVar = this.recursiveEulersMethod(previousIndependentVar, deltaX);
        }
        // then we calculate dy by multiplying dy/dx by dx
        let deltaY = deltaX * this.differential(previousIndependentVar, dependentVar);
        // the y-value for this step is the previous step + dy
        return dependentVar + deltaY;
    }
    /**
     * Finds approximate solutions to a differential equation using a non-recursive version of Euler's method
     * @param targetIndependentVariable The desired independent variable to calculate Euler's method for
     * @param deltaX The step size
     * @returns The approximate solution to the given the differential equation for the target independent variable
     */
    nonRecursiveEulersMethod(targetIndependentVariable, deltaX) {
        let calculatedDependentVariable = this.dependentVarInitialCondition;
        // this runs the steps based on the step size
        for (let i = this.independentVarInitialCondition; i < targetIndependentVariable; i = i + deltaX) {
            // calculate dy/dx
            let derivative = this.differential(i, calculatedDependentVariable);
            // let dy = dy/dx * dx
            let deltaY = derivative * deltaX;
            calculatedDependentVariable = calculatedDependentVariable + deltaY;
        }
        return calculatedDependentVariable;
    }
    /**
     * Rounds a number to a desired number of decimal places
     * @param number The number to round
     * @param decimals The number of decimal places to keep
     * @returns The rounded number
     */
    roundToDecimals(number, decimals) {
        const desiredPrecision = Math.pow(10, decimals);
        // Creates an integer of our desired precision
        // Then divides by that power to truncate while following rounding rules
        return Math.round(number * desiredPrecision) / desiredPrecision;
    }
    /**
     * Evaluates dy/dx for the given differential
     * @param independentVar (optional) the x value to use in dy/dx, if no value is given, the initial condition is used
     * @param dependentVar (optional) the y value to use in dy/dx, if no value is given, the initial condition is used
     * @param rounding (optional) the desired number of decimal places, if no value is given, the number will not be rounded
     * @returns the value of dy/dx for the given inputs
     */
    evaluateDifferential(independentVar, dependentVar, rounding) {
        independentVar = independentVar || this.independentVarInitialCondition;
        dependentVar = dependentVar || this.dependentVarInitialCondition;
        let dydx = this.differential(independentVar, dependentVar);
        // Returns the value of the function given at a point (x,y)
        if (rounding)
            return this.roundToDecimals(dydx, rounding);
        return dydx;
    }
}
