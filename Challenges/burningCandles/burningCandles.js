function burningCandles(candleSizes, n) {
    let total = 0;
    let wax = 0;
    let newCandle;
    candleSizes.sort((a, b) => b - a);
    
    for (let i = 0; candleSizes[i] > 0; i++) {        
        wax += candleSizes[i];
        total += candleSizes[i];
        candleSizes[i] = 0;
        
        if ((i + 1) % n === 0) {
            candleSizes.push(Math.floor(wax / (n + 1)));
            candleSizes.sort((a, b) => b - a);
            i = -1;
            wax = 0;
        }  
    }
    
    return total;
}

// least characters
burningCandles = (c, n) => {
    t = w = 0
    c.sort((a, b) => b - a)
    for (i = 0; c[i] > 0; i++) {        
        w += c[i]
        t += c[i]
        c[i] = 0
        
        if ((i + 1) % n == 0) {
            c.push(Math.floor(w / (n + 1)))
            c.sort((a, b) => b - a)
            i = -1
            w = 0
        }  
    }
    return t
}