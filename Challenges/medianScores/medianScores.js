const medianScores = scores => {
    const temp = new Array(scores.length);
    const count = arr => { return arr.filter(n => n != null).length; }
    let upper, c;
    
    for (let i in scores) {
        temp[i] = scores[i];
        temp.sort((a, b) => a - b);
        c = count(temp);
        if (c % 2) scores[i] = temp[Math.floor(c / 2)];
        else {
            upper = Math.ceil((c / 2));
            scores[i] = Math.ceil((temp[upper] + temp[upper - 1]) / 2);
        } 
    }
    
    return scores;
}