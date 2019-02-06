function fractionSum(a, b) {
    // unlike denominators
    if ((d1 = a[1]) !== (d2 = b[1])) {
        a[0] *= d2;
        a[1] *= d2;
        b[0] *= d1;
        b[1] *= d1;
    }
    
    // sum them
    const c = [a[0] + b[0], a[1]];    
    const factor = Math.min(...c);
    
    // simplify fraction
    for (let i = factor; i > 0; i--) {
        if (c[0] % i == 0 && c[1] % i == 0) {
            c[0] /= i;
            c[1] /= i;
        }
    }
    
    return c; 
}