function greatestCommonPrimeDivisor(a, b) {
    const lesser = (a < b) ? a : b;
    
    for (let i = lesser; i > 1; i--) {
        if (a % i == 0 && b % i == 0) {
            prime = true;
            for (let j = i - 1; j > 1; j--) {
                if (i % j == 0) {
                    prime = false;
                    break;
                }
            }
            if (prime) return i;
        }
    }
    return -1;
}