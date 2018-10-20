function reverseInterference(originalA, originalB, broadcastA, broadcastB) {
    let total = 0;
    let j;
    
    for (let i = 0; i < originalA.length; i++) {
        if (originalA[i] == broadcastA[i] && originalB[i] == broadcastB[i]) continue;
        else if (originalA[i] == broadcastB[i] && originalB[i] == broadcastA[i]) {
            total++;
            j = i;
            for (; j < i + 3; j++) if (originalA[j] != broadcastB[j] || originalB[j] != broadcastA[j]) break;
            i = j;    
        }
        else return -1;
    }
    return total;
}