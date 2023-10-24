const numbers = [5, 2, 1, 5, 6];

// Sorting the array in descending order
numbers.sort(function(a, b) {
    return b - a;
});

console.log("Sorted array in descending order:", numbers);
