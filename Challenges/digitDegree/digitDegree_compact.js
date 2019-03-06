digitDegree = n => {
    l = (n = n.toString()).length
    if (l == 1) return 0
    c = 0
    
    while (1) {
        c++
        s = 0
        for (i = 0; i < n.length; i++) s += parseInt(n[i])
        if ((l = (n = s.toString()).length) == 1) return c
    } 
}