// Demonstrate passing array elements as function arguments using spread.

const numbers = [90, 45, 22.5];

const XYZSum = (a, b, c) => {
    return a + b + c;
};

const result = XYZSum(...numbers);
console.log(result);
