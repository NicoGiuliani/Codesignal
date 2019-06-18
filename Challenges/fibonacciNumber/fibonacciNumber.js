function fibonacciNumber(n) {
    if (n == 0) return 0;
    
    let index = 1;
    let seq = [0, 1];
    
    while (index < n) {
        let temp = seq[0] + seq[1];
        seq[0] = seq[1];
        seq[1] = temp;
        index++;
        
    }
    
    return seq[1];
}