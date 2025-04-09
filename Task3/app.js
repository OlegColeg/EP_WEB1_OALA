function reverseArray(arr) {
    let revers = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        revers.push(arr[i]);
    }
    return revers;
}


console.log(reverseArray([1, 2, 3, 4])); // Output: [4, 3, 2, 1]
console.log(reverseArray(['a', 'b', 'c'])); // Output: ['c', 'b', 'a']