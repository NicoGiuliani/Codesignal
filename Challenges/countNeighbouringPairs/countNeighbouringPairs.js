function countNeighbouringPairs(inputString) {
    let previous = inputString[0];
    let current;
    let pairs = 0;
    
    for (let i = 1; i < inputString.length; i++) {
        current = inputString[i];
        if (current == previous) pairs++;
        previous = current;
    }
    
    return pairs;
}