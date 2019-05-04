passingMark = (p, g) => {
    v = { 'A': 5, 'B': 4, 'C': 3, 'D': 2, 'E': 1 }
    t = 0
    for (i in g) t += v[g[i]]
    return t / g.length >= p
}