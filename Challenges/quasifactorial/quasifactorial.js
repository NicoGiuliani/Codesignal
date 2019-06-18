function quasifactorial(n) {
    let value = 1;
    let next = 2;
    
    while (next <= n) {
        value = value * next - 1;
        next++;        
    }
    
    return value;
}