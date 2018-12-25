function christmasTreeLights(n) {
    let stars = 1;
    let total = 0;
    
    for (let i = 0; i < n; i++) {
        total += stars;
        stars += 2;
    }
    
    return total;
}