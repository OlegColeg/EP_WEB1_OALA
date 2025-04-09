function objectToArray(obj) {
    let result = [];
    for (let property in obj) {
      result.push([property,obj[property]],);
    }
    return result;
 }



console.log(objectToArray({name: 'Alice', age: 25}));// Output: [['name', 'Alice'], ['age', 25]]
console.log(objectToArray({city: 'New York', country: 'USA'}));// Output: [['city', 'New York'], ['country', 'USA']]
