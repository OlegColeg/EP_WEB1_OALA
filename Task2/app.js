function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}


console.log(isPrime(7));  // Output: true
console.log(isPrime(10)); // Output: false
console.log(isPrime(2));  // Output: true