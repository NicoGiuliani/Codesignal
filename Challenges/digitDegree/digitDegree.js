function digitDegree(n) {
    n = n.toString();
    if (n.length == 1) return 0;
    
    let digitSum;
    let counter = 0;
    
    while (true) {
        digitSum = 0;
        
        for (let i = 0; i < n.length; i++) {
            digitSum += parseInt(n[i]);
        } 

        counter++;
        n = digitSum.toString();
        
        if (n.length == 1) return counter;
    }
    
}