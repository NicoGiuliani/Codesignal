timedReading = (m, t) => {
    f = t.match(/[a-zA-Z]+/g)
    c = 0
    if (f) f.map(x => { if (x.length <= m) c++ })
    return c
}