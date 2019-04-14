isTandemRepeat = i => {
    l = i.length
    if (l % 2 != 0) return 0
    x = i.substring(0, l / 2)
    return (i == x + x) ? 1 : 0
}
