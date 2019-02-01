function arrayMaxConsecutiveSum(inputArray, k) {
    let max = 0;
    let temp = 0;
    
    for (let i = 0; i < k; i++) temp += inputArray[i];
    max = temp;
    
    for (let j = k; j < inputArray.length; j++) {
        temp += inputArray[j];
        temp -= inputArray[j - k];
        if (temp > max) max = temp;
    }
    
    return max;
}