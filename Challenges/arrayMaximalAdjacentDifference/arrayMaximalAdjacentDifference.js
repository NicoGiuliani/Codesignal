function arrayMaximalAdjacentDifference(inputArray) {
    let max = 0;
    let temp;
    
    for (let i = 0; i < inputArray.length; i++) {
        temp = Math.abs(inputArray[i] - inputArray[i + 1]);
        if (temp > max) max = temp;
    }
    
    return max;
}