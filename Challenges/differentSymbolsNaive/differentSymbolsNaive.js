function differentSymbolsNaive(s) {
    const set = new Set(s.split(''));
    const arr = Array.from(set);
    return arr.length;
}