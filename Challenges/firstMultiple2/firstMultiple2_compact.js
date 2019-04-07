firstMultiple2 = (d, s) => {
    while (1) {
        for (i in d) if (s % d[i] == 0) return s
        s++
    }
}