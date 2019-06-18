function climbingStairs(n) {
    let sum = 0;
    let digits;
    let temp, i;
    
    function calcFactorial(x) {
        if (!x) return 1;
        let value = x;
        while (x > 1) value *= --x;
        return value;
    }
    
    for (i = 0, s; i <= Math.floor(n / 2); i++) {
        temp = n - 2 * i;
        digits = temp + i;
        s = calcFactorial(digits) / (calcFactorial(i) * calcFactorial(digits - i));
        sum += s;
    }
    
    return sum;
}