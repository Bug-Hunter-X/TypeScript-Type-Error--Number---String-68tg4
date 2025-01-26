function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: string | number): number {
  if (typeof b === 'string') {
    const numB = parseFloat(b);
    if (isNaN(numB)) {
      throw new Error("Invalid input: b must be a number or a parsable string");
    }
    return a + numB;
  } else {
    return a + b;
  }
}

let result = add(1, 2); // Works correctly
let result2 = addSafe(1, "2"); // Uses the safe addition function
let result3 = addSafe(1, "abc"); //Throws error because of non parseable string
//let result4 = add(1, "2"); // This will still cause an error because add doesn't handle strings