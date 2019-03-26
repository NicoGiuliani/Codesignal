countDistantPairs = (m, x) => {
    for (i = 0, y = 0; i < m.length - x - 1; i++) if (m[i] == m[i + x + 1]) y++
    return y
}