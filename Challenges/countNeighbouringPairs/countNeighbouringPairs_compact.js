countNeighbouringPairs = s => {
    p = s[0]
    t = 0
    i = 1
    
    while (i < s.length) {
        c = s[i++]
        if (c == p) t++
        p = c
    }
    
    return t
}