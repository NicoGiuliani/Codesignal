function chessBoardSquaresUnderQueenAttack(a, b) {
    let n = (a * b) * (a + b - 2);
    let x, y, d;
    
    for (y = 0; y < a; y++) {
        for (x = 0; x < b; x++) {
            d = 1;
            while (x - d >= 0 && y - d++ >= 0) n++;
            d = 1;
            while (x + d < b && y + d++ < a) n++;
            d = 1;
            while (x - d >= 0 && y + d++ < a) n++;
            d = 1;
            while (x + d < b && y - d++ >= 0) n++;
        }
    }
    return n;
}