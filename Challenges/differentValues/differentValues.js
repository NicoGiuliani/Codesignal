function differentValues(a, d) {
    let difference = -1;
    let temp;
    for (let i = 0; i < a.length - 1; i++) {
        for (let j = i + 1; j < a.length; j++) {
            temp = Math.abs(a[i] - a[j]);
            if (temp <= d && (d - temp) < (d - difference)) difference = temp;
        }
    }
    return difference;
}