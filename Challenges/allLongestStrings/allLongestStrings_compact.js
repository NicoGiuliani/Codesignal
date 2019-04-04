allLongestStrings = x => {
    a = []
    m = 0
    for (i in x) if ((y = x[i].length) > m) m = y
    for (i in x) if (x[i].length == m) a.push(x[i])
    return a
}