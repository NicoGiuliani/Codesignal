function medianScores(scores) {
    
    let medians = [];
    let temp, upper, lower;
    
    for (let i = 1; i < scores.length + 1; i++) {
        temp = scores.slice(0, i).sort();
        console.log(temp);
        if (temp.length % 2 == 0) {
            console.log("temp", temp.sort((a, b) => b - a));
            upper = temp[Math.ceil((temp.length - 1) / 2)];
            lower = temp[Math.floor((temp.length - 1) / 2)];
            medians.push(Math.ceil((upper + lower) / 2));
        } else {
            console.log("temp", temp.sort((a, b) => b - a));
            medians.push(temp[(temp.length - 1) / 2]);
        }
    }
    return medians;
}
