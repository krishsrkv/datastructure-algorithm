function merge(arr, l, m, r) {
    var n1 = m - l + 1;
    var n2 = r - m;

    // Create two temp arrays
    var L = new Array(n1);
    var R = new Array(n2);

    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++) L[i] = arr[l + i];
    for (var j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

    // Merge the temp arrays back into arr[l..r]
    var i = 0; // Initial index of the first subarray
    var j = 0; // Initial index of the second subarray
    var k = l; // Initial index of the merged subarray

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    // Copy the remaining elements of R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

function mergeSort(arr, l, r) {
    if (l >= r) {
        return;
    }
    var m = l + parseInt((r - l) / 2);
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
}

function printArray(A, size) {
    for (var i = 0; i < size; i++) {
        console.log(A[i] + " ");
    }
}

// Driver method
var arr = [58, 37, 53, 3, 18, 89, 8];
var arr_size = arr.length;

console.log("Given array:");
printArray(arr, arr_size);

mergeSort(arr, 0, arr_size - 1);

console.log("Sorted array:");
printArray(arr, arr_size);
