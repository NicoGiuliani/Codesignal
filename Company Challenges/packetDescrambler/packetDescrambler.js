function packetDescrambler(seq, fragmentData, n) {
    let message = [];
    let hash = {};
    let last = seq[0];
    let goal = Math.ceil(n / 2);        
    
    for (let i = 0; i < seq.length; i++) {
        if (hash[seq[i]]) hash[seq[i]].push(fragmentData[i]);
        else hash[seq[i]] = [fragmentData[i]];
    }
            
    for (i in hash) {
        current = '';
        count = 0;
        
        for (let j = 0; j < hash[i].length; j++) {
            if (j) {
                if (hash[i][j] == current) {
                    count++;
                    if (count == goal) break;
                } else current = hash[i][j]; 
            } else {
                current = hash[i][j];
                count++;
            }
        }
        
        if (count <= n / 2) return ''; 
        message[i] = current;
    }
    
    message = message.filter(n => n);
    if (message.length == 1 && message[0] == '#') return '#';
    if (message[0] == '#' || message[0] == '+') return '';
    
    return message.join('');
}





/* OLDER VERSION */

// function packetDescrambler(seq, fragmentData, n) {
//     let goal, current, count;
//     let unique = [...new Set(seq)].sort((a, b) => a - b);
//     if (unique[unique.length - 1] - unique[0] + 1 != unique.length) return '';
    
//     let message = new Array(unique.length);

//     let hash = {};
//     for (let i = 0; i < seq.length; i++) {
//         if (hash[seq[i]]) hash[seq[i]].push(fragmentData[i]);
//         else hash[seq[i]] = [fragmentData[i]];
//     }
        
//     for (i in hash) {
//         goal = Math.ceil(hash[i].length / 2);        
//         current = '';
//         count = 0;
        
//         for (let j = 0; j < hash[i].length; j++) {
//             if (j != 0) {
//                 if (hash[i][j] == current) {
//                     count++;
//                     if (count == goal) break;
//                 } else current = hash[i][j]; 
//             } else {
//                 current = hash[i][j];
//                 count++;
//             }
//         }
        
//         if (count <= n / 2) return ''; 
//         message[i] = current;
//     }
    
//     if (message.length == 1 && message[0] == '#') return '#';
//     if (message[0] == '#' || message[0] == '+') return '';
    
//     return message.join('');
// }