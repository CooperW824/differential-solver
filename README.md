# Differential Equation Solver for TypeScript

A simple Typescript Library for Approximating Solutions to Ordinary Differential Equations using Euler's method.

This project is very simple, but is a proving ground for my future ideas for Mathematics in JS/TS.

## Installation

Installation is easy using NPM:

- Install it directly from NPM

        npm i differential-solver

- From GitHub

        npm i github.com/cooperw824/differential-solver

- From Source

        git clone github.com/cooperw824/differential-solver

        cd path/to/project

        npm i path/to/differential-solver

## Usage

To start, create a new DifferentialEquation object:

```typescript
new DifferentialEquation(
differential:(x: number, y:number) => number,
independentVarInitialCondition:number,
dependentVarInitialCondition:number )
```

The DifferentialEquation class takes three parameters:

- The Differential Equation to Evaluate (Required)

  - A function with two number inputs that outputs a number

  ```typescript
  (x: number, y: number) => number;
  ```

- The Independent Variable's (x-value) Initial Condition (Required)

  - A number that indicates the initial value for X

- The Dependent Variable's (y-value) Initial Condition (Required)
  - A number that indicates the initial value for y

In typescript:

```typescript
import {DifferentialEquation} from 'differential-solver';

let differential  = new DifferentialEquation((x + y) => x+y, 0, 1);
```

In JavaScript:

```javascript
import {DifferentialEquation} from 'differential-solver'; // ES Modules Import

// const { DifferentialEquation } = require('differential-solver'); // CommonJS Import

let differential  = new DifferentialEquation((x + y) => x+y, 0, 1);
```

### Approximating Solutions to Differential Equations

```typescript
eulersMethod(
targetIndependentVariable: number,
steps: number,
options?: EulersMethodOptions)
```

To approximate the solution of Differential Equation at certain independent variable, make a call to the Euler's Method function

The Euler's Method function has two different modes: recursive and non recursive, they both return the same answer, but if your desired number of steps is too large you may want to use the non-recursive version.

- Parameters
  - targetIndependentVariable: number (Required)
    - The x-value to approximate a solution for
    - f(targetIndependentVariable) ≈ output
  - steps: number (Required)
  - options: EulersMethodOptions (Optional)
    - recursive: Boolean (Optional)
      - Should the recursive or non recursive version of the algorithm be used? Defaults to false.
    - rounding: Number (Optional)
        - Round to this many decimals. Defaults to 3.

#### Non-recursive version

By default the non-recursive function runs:

```typescript
import {DifferentialEquation} from 'differential-solver';

let differential  = new DifferentialEquation((x + y) => x+y, 0, 1);

// approximates f(1) in 3 steps, when dy/dx = x + y and f(0) = 1 
let approximation = differential.eulersMethod(1, 3)

console.log(approximation)
// prints: 2.741

```

To add more decimals after the decimal point:

```typescript
import {DifferentialEquation} from 'differential-solver';

let differential  = new DifferentialEquation((x + y) => x+y, 0, 1);

// approximates f(1) in 3 steps, when dy/dx = x + y and f(0) = 1 
let approximation = differential.eulersMethod(1, 3, {rounding: 10})

console.log(approximation)
// prints: 2.7407407407

```

#### Recursive Version

Using the recursive version is as easy as setting the recursive option to true:

```typescript
import {DifferentialEquation} from 'differential-solver';

let differential  = new DifferentialEquation((x + y) => x+y, 0, 1);

// approximates f(1) in 3 steps, when dy/dx = x + y and f(0) = 1 
let approximation = differential.eulersMethod(1, 3, {recursive: true})

console.log(approximation)
// prints: 2.741

```

To add more decimals after the decimal point:

```typescript
import {DifferentialEquation} from 'differential-solver';

let differential  = new DifferentialEquation((x + y) => x+y, 0, 1);

// approximates f(1) in 3 steps, when dy/dx = x + y and f(0) = 1 
let approximation = differential.eulersMethod(1, 3, {rounding: 10, recursive: true})

console.log(approximation)
// prints: 2.7407407407

```

### Evaluating a Derivative at a Point

```typescript
evaluateDifferential(independentVar?: number,
dependentVar?: number,
rounding?: number)
```

Returns the value of the derivative at the given point

- Parameters:
    - independentVar: number (Optional)
        - The x value to evaluate the derivative at. Defaults to the independent variable's initial condition
    - dependentVar: number (Optional)
        - The y value to evaluate the derivative at. Defaults to the dependent variable's initial condition    
    - rounding: number (Optional) 
        - How many numbers after the decimal point to round to. Defaults to not rounding.
- Returns
    -  differential(independentVar, dependentVar)
    - The derivative at the given point x,y 


Using initial condition:

```typescript
import {DifferentialEquation} from 'differential-solver';

let differential  = new DifferentialEquation((x + y) => x+y, 0, 1);

let derivative = differential.evaluateDifferential()

console.log(derivative)
// Prints 1
```

Using given values:

```typescript
import {DifferentialEquation} from 'differential-solver';

let differential  = new DifferentialEquation((x + y) => x+y, 0, 1);

let derivative = differential.evaluateDifferential(3.14159, 2.718)

console.log(derivative)
// Prints 5.85959
```


Using given values, and given rounding:

```typescript
import {DifferentialEquation} from 'differential-solver';

let differential  = new DifferentialEquation((x + y) => x+y, 0, 1);

let derivative = differential.evaluateDifferential(3.14159, 2.718, 3)

console.log(derivative)
// Prints 5.86
// 5.85959 rounds to 5.86
```

## Contributing 

This is a very small library, but acts as my proving ground for building future JS / TS modules. I have a few ideas for expanding this, but if you have any issues or ideas please open a GitHub issue.

If you have a feature you would to add, fork the repository, implement your feature, add / verify tests, and then open your pull request.
