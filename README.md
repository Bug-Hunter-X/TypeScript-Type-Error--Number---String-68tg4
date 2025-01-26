# TypeScript Type Error: Number + String

This example demonstrates a common TypeScript type error that occurs when performing an arithmetic operation (in this case, addition) on incompatible types. The function `add` is declared to accept two numbers and return a number, but the call to `add(1, "2")` attempts to add a number and a string, leading to a type error.

## How to reproduce:

1. Save the code in `bug.ts`.
2. Compile the code using the TypeScript compiler (tsc).
3. Observe the type error message.

## Solution:

The solution involves ensuring that the types are compatible before the addition operation.  This can be done through explicit type conversion or checking.

The solution is provided in `bugSolution.ts`.