function meanScores(scores) {
    let arr = new Array(scores.length);
    let total, i;
    for (i = 1; i <= scores.length; i++) {
        total = 0;
        for (let j = 0; j < i; j++) total += scores[j];
        arr[i - 1] = Math.floor(total / i);
    }
    return arr;
}