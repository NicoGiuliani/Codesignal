function longestUncorruptedSegment(sourceArray, destinationArray) {
    let longest = 0;
    let counter = 0;
    let startBlock = 0;
    let block = 0;
    
    const check = () => {
        if (counter > longest) {
            longest = counter;
            startBlock = block;
        }
    }
    
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i] != destinationArray[i]) {
            check();
            counter = 0;
            block = i + 1;
            continue;
        }
        counter++;
    }
    
    check();
    if (longest == 0) startBlock = 0;
    return [longest, startBlock];
}
