function cyclicString(s) {
    let x = 1;
    for (let i = 0; i < s.length; i++) {
        if (i + x == s.length) return x;
        if (s[i] != s[i + x]) {
            x++;
            i = -1;
            continue;
        }
    }
}