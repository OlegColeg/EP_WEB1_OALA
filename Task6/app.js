function mergeObjects(obj1, obj2) { 
    const merged = { ...obj1, ...obj2 };
    return merged;
 }


console.log(mergeObjects({a: 1, b: 2}, {b: 3, c: 4}));
// Output: { a: 1, b: 3, c: 4 }