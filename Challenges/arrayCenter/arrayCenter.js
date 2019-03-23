function arrayCenter(a) {
    let avg = 0
    a.map(x => avg += x);
    avg /= a.length;
    
    let min = Math.min(...a);
    let temp;
    
    for (let i = 0; i < a.length; i++) {
        temp = Math.abs(a[i] - avg);
        if (temp >= min) a[i] = null;
    }
    
    a = a.filter(x => x != null);
    return a;
}