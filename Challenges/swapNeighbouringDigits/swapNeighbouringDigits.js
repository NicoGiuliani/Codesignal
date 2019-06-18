function swapNeighbouringDigits(n) {
    n = n.toString().split('');
    
    for (let i = 1; i < n.length; i += 2) {
        let temp = n[i - 1];
        n[i - 1] = n[i];
        n[i] = temp;
    }
    
    return parseInt(n.join(''));
}