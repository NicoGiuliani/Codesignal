function speedingForCandy(streets, n, k) {
    let streetTotals = [];
    for (let i = 0; i < streets.length; i++) {
        let streetTotal = 0;
        for (let j = 0; j < streets[i].length; j++) {
            if (j >= n && streets[i][j] < 1) break;
            streetTotal += streets[i][j];     
        }
        streetTotals.push(streetTotal);
    }
    
    streetTotals.sort((a, b) => b - a);
    console.log(streetTotals);
    let total = 0;
    for (let i = 0; i < k; i++) {
        if (streetTotals[i] < 1) continue;
        total += streetTotals[i];
    }
    return (total < 1) ? 0 : total;
}
