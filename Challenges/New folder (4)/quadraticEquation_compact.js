quadraticEquation = (a, b, c) => {
    y = 2 * a
    z = Math.sqrt(b * b - 4 * a * c) / (2 * a)
    return isNaN(z) ? [] : (o = -b / y - z) == (t = -b / y + z) ? [o] : [o, t].sort()
}