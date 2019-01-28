function replaceDigitWithPrime(n) {
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    let exp = 0;
    let total = 0;
    
    n = n.toString().split('').reverse();
    for (let i = 0; i < n.length; i++) {
        total += (primes[n[i]] * Math.pow(10, exp)); 
        exp++;
    }
    
    return total;
}