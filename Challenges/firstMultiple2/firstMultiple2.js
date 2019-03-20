function firstMultiple2(divisors, start) {
    while (true) {
        for (let i = 0; i < divisors.length; i++) {
            if (start % divisors[i] == 0) return start;
        }
        start++;
    }
}