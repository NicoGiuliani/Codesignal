function properNounCorrection(noun) {
    (noun = noun.split('')).map((x, i) => noun[i] = (i == 0) ? x.toUpperCase() : x.toLowerCase());
    return noun.join('');
}