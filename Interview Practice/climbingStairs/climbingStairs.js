// You are climbing a staircase that has n steps. You can take the steps either 1 or 2 at a time. Calculate how many distinct ways you can climb to the top of the staircase.

function climbingStairs(n) {
    let sum = 0;
    let digits;
    let temp;
    
    function calcFactorial(x) {
        if (!x) return 1;
        let value = x;
        while (x > 1) value *= --x;
        return value;
    }
    
    for (let i = 0, s; i <= Math.floor(n / 2); i++) {
        temp = n - 2 * i;
        digits = temp + i;

        s = calcFactorial(digits) / (calcFactorial(i) * calcFactorial(digits - i));
        sum += s;
    }
    
    return sum;
}