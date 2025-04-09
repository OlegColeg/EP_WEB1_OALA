function countOccurrences(arr, value) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            count++;
        }

    }
    return count;
}


console.log(countOccurrences([1, 2, 2, 3, 2, 4], 2)); // Output: 3
console.log(countOccurrences(['a', 'b', 'a', 'c'], 'a')); // Output: 2