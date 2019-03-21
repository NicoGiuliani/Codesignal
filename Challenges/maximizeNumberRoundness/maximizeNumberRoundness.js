function maximizeNumberRoundness(n) {
    n = n.toString().split('').reverse();    
    let counter = 0;

    for (let i = 0; i < n.length; i++) {
        if (n[i] != '0') {
            for (let j = n.length - 1; j >= i; j--) {
                if (j == i) return counter;
                if (n[j] == 0) {
                    temp = n[i];
                    n[i] = n[j];
                    n[j] = temp;
                    counter++;
                    break;
                }
            }
        }
    }
    
}