// factorial.ts

// Recursive function to calculate factorial
function factorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Test the factorial function
const num: number = 5;
console.log(`Factorial of ${num} is: ${factorial(num)}`);
