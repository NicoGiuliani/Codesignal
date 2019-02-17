blurFaces = p => {
    l = p.length
    o = new Array(l)
    for (i = 0; i < l; i++) o[i] = new Array(p[i].length)
    
    for (i = 0; i < l; i++) {
        for (j = 0; j < p[i].length; j++) {
            s = n = 0
            a = j - 1
            b = j + 1
            c = i - 1
            d = i + 1
            
            if (a >= 0) {
                s += p[i][a]
                n++
                if (c >= 0) {
                    s += p[c][a]
                    n++
                }
                if (d < l) {
                    s += p[d][a]
                    n++
                }
            }
            
            if (b < p[i].length) {
                s += p[i][b]
                n++
                if (c >= 0) {
                    s += p[c][b]
                    n++
                }
                if (d < l) {
                    s += p[d][b]
                    n++
                }
            }
            
            if (c >= 0) {
                s += p[c][j]
                n++
            }
            if (d < l) {
                s += p[d][j]
                n++
            }
            
            o[i][j] = s / n
        }
    }
    
    return o
}