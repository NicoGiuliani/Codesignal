function scariestMask(mask) {
    let count = 0;
    for (let i = 0; i < mask.length; i++) {
        for (let j = 0; j < mask[i].length / 2; j++) {
            if (mask[i][j] !== mask[i][mask[i].length - j - 1]) count++;
        }
    }
    return count;
}