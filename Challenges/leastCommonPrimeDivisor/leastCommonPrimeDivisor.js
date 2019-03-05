function leastCommonPrimeDivisor(a, b) {  
    for (let i = 2; i < b; i++) {
        if (a % i == 0 && b % i == 0) {
            for (let j = 2; j < i; j++) if (i % j == 0) continue;
            return i;
        }
    }
    return -1;
}