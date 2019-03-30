maximizeNumberRoundness = n => {
    n = n.toString().split('').reverse()    
    c = 0

    for (i = 0; i < n.length; i++) {
        if (n[i] != '0') {
            for (j = n.length - 1; j >= i; j--) {
                if (j == i) return c
                if (n[j] == 0) {
                    x = n[i]
                    n[i] = n[j]
                    n[j] = x
                    c++
                    break
                }
            }
        }
    }
    
}