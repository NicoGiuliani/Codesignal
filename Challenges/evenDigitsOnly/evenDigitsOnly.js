evenDigitsOnly = n => {
    n = n.toString().split('')
    for (i in n) if (parseInt(n[i]) % 2) return 0
    return 1
}