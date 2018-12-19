function whereToGather(travelCosts) {
    let hash = {};
    let host = 0;
    let subtotal, i;
    
    while (host < travelCosts.length) {
        subtotal = 0;
        for (i = 0; i < travelCosts.length; i++) {
            if (travelCosts[i][host] < 0) {
                subtotal = -1;
                break;
            }
            subtotal += travelCosts[i][host];
        }
        hash[host++] = subtotal;
    }  
    
    const values = Object.values(hash).sort((a, b) => a - b);
    for (i in values) if (values[i] > -1) return values[i];
    return -1;
}