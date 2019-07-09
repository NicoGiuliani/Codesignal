robotWalk = a => {
    c = [a[1], a[0] - a[2]]
    x = a[1]
    y = a[2]
    p = q = 0
    
    for (i = 3; i < a.length; i++) {
        if (i % 2 && a[i] >= x || i % 2 == 0 && a[i] >= y) return 1
        if (i % 2) {
            if (p) c[0] += a[i]
            else c[0] -= a[i]
            x = a[i]
            p = (p) ? 0 : 1
        } else {
            if (q) c[1] -= a[i]
            else c[1] += a[i]
            y = a[i]
            q = (q) ? 0 : 1
        }
    }
    
    return 0
}