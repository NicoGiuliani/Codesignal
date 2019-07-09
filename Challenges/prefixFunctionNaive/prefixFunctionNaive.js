function prefixFunctionNaive(s) {
    let p = [0];
    let sub, sub1, sub2, counter, temp;
    
    for (let i = 2, j, x; i <= s.length; i++) {
        sub = s.substring(0, i);
        counter = 0;
        
        for (j = 0; j < sub.length - 1; j++) {
            sub1 = sub.substring(0, j + 1);
            sub2 = sub.substring(sub.length - 1 - j);
            temp = 0;
            
            for (x = 0; x < sub1.length; x++) {
                if (sub1[x] == sub2[x]) temp++;    
                else {
                    temp = 0;
                    break;
                }
            }
            
            if (temp > counter) counter = temp;
        }
        
        p.push(counter);
    }
    
    return p;
}