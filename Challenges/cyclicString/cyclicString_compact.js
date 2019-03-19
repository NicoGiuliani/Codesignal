cyclicString = s => {
    x = 1
    for (i = 0; i < s.length; i++) {
        if (i + x == s.length) return x
        if (s[i] != s[i + x]) {
            x++
            i = -1
            continue
        }
    }
}