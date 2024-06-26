// factorial.ts
// Recursive function to calculate factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
// Test the factorial function
var num = 5;
console.log("Factorial of ".concat(num, " is: ").concat(factorial(num)));
