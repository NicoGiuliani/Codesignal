function increasingNumber(x, n) {    
    let y;
    for (let i = 1; i <= n; i++) {
        y = 0;
        while ((x + y) % i != 0) y++;
        x += y;
    }
    
    return x;
}