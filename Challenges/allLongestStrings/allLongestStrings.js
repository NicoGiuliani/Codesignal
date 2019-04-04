function allLongestStrings(inputArray) {
    let longest = 0;
    let y, i;
    for (i in inputArray) {
        if ((y = inputArray[i].length) > longest) longest = y;
    }
    let arr = [];
    for (i in inputArray) {
        if (inputArray[i].length == longest) arr.push(inputArray[i]);
    }
    return arr;
}