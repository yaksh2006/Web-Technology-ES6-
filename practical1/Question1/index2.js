// Merge two array using the spread operator
const nums = [10, "Hello", 67, 90.45, 23];
const nums1 = [29, 78, 34.5, "World", 44];

const mergeArray = [...nums, ...nums1];

console.log("The merged array is: ", mergeArray);