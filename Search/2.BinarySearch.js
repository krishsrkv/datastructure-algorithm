let recursiveFunction = function(arr, x, start, end) {
    // Base condition: element not found
    if (start > end) return -1;

    // Find the middle index
    let mid = Math.floor((start + end) / 2);

    // Check if mid is the key
    if (arr[mid] === x) return mid;

    // If element at mid is greater than x, search in the left half
    if (arr[mid] > x)
        return recursiveFunction(arr, x, start, mid - 1);

    // If element at mid is smaller than x, search in the right half
    return recursiveFunction(arr, x, mid + 1, end);
};

// Driver code
let arr = [12, 18, 23, 25, 29, 32, 35, 40, 58, 66];
let x = 291;

let result = recursiveFunction(arr, x, 0, arr.length - 1);

if (result !== -1)
    console.log(`Element Found at index ${result}`);
else
    console.log("Element Not Found!");
