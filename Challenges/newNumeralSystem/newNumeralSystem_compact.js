newNumeralSystem = n => {
    a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    x = a.indexOf(n)
    l = Math.floor(x / 2) + 1
    y = new Array(l)
    for (i = 0; i < l; i++) y[i] = a[i] + " + " + a[x - i]
    return y
}