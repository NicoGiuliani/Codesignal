function packetDescrambler(seq, fragmentData, n) {
    let hash = {};
    let char, most;
    let message = "";
    let mLength = Math.max(...seq) - Math.min(...seq) + 1;
        
    for (i in seq) {
        if (hash[seq[i]]) {
            if (hash[seq[i]][fragmentData[i]]) hash[seq[i]][fragmentData[i]]++; 
            else hash[seq[i]][fragmentData[i]] = 1;
        } else {
            hash[seq[i]] = {};
            hash[seq[i]][fragmentData[i]] = 1;
        }
    }
          
    for (i in hash) {  
        char = '';
        most = 0;
        for (j in hash[i]) {
            if (hash[i][j] > most) {
                most = hash[i][j];
                char = j;
            }
        }
        if (most <= n / 2) return '';
        message += char;
    }
    
    return (message[message.length-1] == '#' && message.length == mLength) ? message : '';  
}