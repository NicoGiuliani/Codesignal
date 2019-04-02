exerciseElaboration = (p, n) => {
    if (p < 3) return p * p * 4
    s = 0
    if (n) {
        t = Math.pow(p, 2).toString()
        n = t + 2 * parseInt(t) + t
    } 
    else n = Math.pow(p.toString() + p, 2).toString()
    for (i in n) s += parseInt(n[i])
    return s
}