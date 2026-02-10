// <!-- Create a function using the rest operator to accept numbers -->

const sumAll = (...numbers) => {
    return numbers.reduce((sum, n) => sum + n, 0);
}
console.log("sum = ", sumAll(10, 40, 56, 23, 90));