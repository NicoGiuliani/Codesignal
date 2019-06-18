function countInversionsNaive(inputArray) {
    let counter = 0;
    
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = i + 1; j < inputArray.length; j++) {
            if (inputArray[i] > inputArray[j]) counter++;
        }
    }
    
    return counter;
}