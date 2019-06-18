function primeFactors(n) {
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23];
    let answer = [];
    
    for (let i = 0; i < primes.length; i++) {
        while (n % primes[i] == 0) {
            n /= primes[i];
            answer.push(primes[i]);
        }
    }

    return answer;
}