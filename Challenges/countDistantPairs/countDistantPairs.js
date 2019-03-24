function countDistantPairs(inputString, distance) {
    let count = 0;
    for (let i = 0; i < inputString.length - distance - 1; i++) {
       if (inputString[i] == inputString[i + distance + 1]) count++; 
    }
    return count;
}