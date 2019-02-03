function primeSumOfPrimeFactors(n) {
    let factors = [];
    let divisor = 2;
    
    // breaks the number into its factors
    while (true) {
        if (n / divisor < 1) break;
        else if (n % divisor == 0) {
            n /= divisor;
            factors.push(divisor);
        }
        else divisor++;
    }
    
    // sums the factors of n
    let sum = 0;
    for (let i in factors) sum += factors[i];

    // if the sum is divisible by any number but itself and one, it cannot be prime
    for (let i = 2; i < sum; i++) if (sum % i == 0) return false;
    return true;
}
