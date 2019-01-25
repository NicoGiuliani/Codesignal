function naturalNumbersListing(n) {
    let total = 1;
    let last = 1;
    let counter = 4;
    
    for (let i = 0; true; i++) {
        if (i % 2 == 0) {
            last++;
        } 
        else {
            last += counter;
            counter += 4;
        }
            
        if (last <= n) {
            total += last;
        } else break;   
    }
    
    return total;
}