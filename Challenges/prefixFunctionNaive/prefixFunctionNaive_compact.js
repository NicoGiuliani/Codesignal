prefixFunctionNaive = s => {
    p = [0]
    
    for (i = 2; i <= s.length; i++) {
        m = s.substring(0, i)
        c = 0
        
        for (j = 0; j < m.length - 1; j++) {
            r = m.substring(0, j + 1)
            q = m.substring(m.length - 1 - j)
            t = 0
            
            for (x = 0; x < r.length; x++) {
                if (r[x] == q[x]) t++  
                else {
                    t = 0
                    break
                }
            }
            
            if (t > c) c = t
        }
        
        p.push(c)
    }

    return p
}