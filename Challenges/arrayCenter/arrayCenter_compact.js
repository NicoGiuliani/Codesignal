arrayCenter = a => {
    b = 0
    a.map(x => b += x)
    b /= a.length
    m = Math.min(...a)
    for (i in a) if (Math.abs(a[i] - b) >= m) a[i] = 'z'
    return a.filter(x => x != 'z')
}