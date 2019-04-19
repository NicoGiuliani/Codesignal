matrixElementsSum = m => {
    for (y = i = 0; i < m[0].length; i++) {
        for (j = 0; j < m.length; j++) {
            if (!(x = m[j][i])) break
            y += x
        }
    }
    return y
}