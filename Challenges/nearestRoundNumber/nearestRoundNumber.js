function nearestRoundNumber(value) {
    let i = 0;
    while (i < value) i += 10;
    return i;
}