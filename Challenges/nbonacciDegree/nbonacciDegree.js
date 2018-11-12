function nbonacciDegree(sequence) {
    let seq = sequence.slice(0).reverse();
    const target = seq[0];
    let sum = 0, degree = 0;
    let possibilities = [];
    let i, j;
    
    for (i = 1; i < seq.length; i++) {
        sum += seq[i];
        degree++;
        if (sum == target) possibilities.push(degree);
    }

    if (possibilities.length == 1) return possibilities[0];
    else if (possibilities.length == 0) return -1;
    
    let testSum;
    for (i = 0; i < possibilities.length; i++) {
        testSum = 0;
        for (let j = 0; j < possibilities[i]; j++) testSum += sequence[j];
        if (testSum == sequence[possibilities[i]]) return possibilities[i];       
    } 
    
}