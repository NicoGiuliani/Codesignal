function arrayMode(sequence) {
    let map = {}
    for (let i in sequence) {
        if (!map[sequence[i]]) map[sequence[i]] = 1;
        else map[sequence[i]]++;
    }
    
    let mode = 0;
    let max = 0;
    Object.keys(map).forEach(key => {
        if (map[key] > max) {
            max = map[key];
            mode = key;
        }
    });
    
    return parseInt(mode);
}