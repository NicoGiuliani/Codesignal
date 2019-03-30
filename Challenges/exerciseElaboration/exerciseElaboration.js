function exerciseElaboration(p, n) {
    if (p < 3) return Math.pow(p, 2) * 4;
    
    let sum = 0;
    let num, temp;
    if (n == 0) {
        num = p.toString() + p;
        num = Math.pow(num, 2).toString();
    } else {
        temp = Math.pow(p, 2).toString();
        num = temp + (2 * parseInt(temp)) + temp;
    }
    for (let i in num) sum += parseInt(num[i]);
    return sum;
}