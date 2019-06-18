function maximumSubsetProduct(a) {
    let largestNeg;
    let negCount = 0;
    
    for (let i in a) {
        if (a[i] < 0) {
            negCount++;
            if (a[i] > largestNeg || largestNeg == null) largestNeg = a[i];
        }
    }

    return (negCount % 2 == 0 || a.length == 1) ? 1 : largestNeg;
}