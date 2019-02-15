longestUncorruptedSegment = (s, d) => {
    a = b = c = l = 0
    e = () => {
        if (c > l) {
            a = b
            l = c
        }
    }
    
    for (i = 0; i < s.length; i++) {
        if (s[i] != d[i]) {
            e()
            c = 0
            b = i + 1
            continue
        }
        c++
    }
    
    e()
    return [l, (!l) ? 0 : a]
}