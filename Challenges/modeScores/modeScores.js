function modeScores(scores) {
    let hash = {};
    let answer = [];
    let currentKeys, highest, noChange, key, possible;
    
    for (let i = 0; i < scores.length; i++) { 
        hash[scores[i]] = (!hash[scores[i]]) ? 1 : hash[scores[i]] + 1;
        
        if (i === 0) {
            answer.push(scores[0]);
            continue;
        }
        
        currentKeys = Object.keys(hash);
        highest = hash[currentKeys[0]];
        noChange = true;
        
        for (key in hash) {
            if (hash[key] !== highest) noChange = false;
            if (hash[key] >= highest) {
                highest = hash[key];
                possible = key;
            }
        }
        
        if (noChange) answer.push(currentKeys[currentKeys.length - 1]);
        else answer.push(possible); 
    }
    
    return answer.map(x => parseInt(x));
}
