function maxFraction(numerators, denominators) {
    let index = 0;
    let max = numerators[0] / denominators[0];
    for (let i = 1; i < numerators.length; i++) {
        if (numerators[i] / denominators[i] > max) {
            index = i;
            max = numerators[i] / denominators[i];
        }
    }
    return index;
}