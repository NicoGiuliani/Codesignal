function sugarHigh(candies, threshold) {
    let answer = [];
    let most = Math.max(...candies);
    let least;
    let temp;
    let total = 0;
    let increment = 5;
    
    while (total < threshold) {
        least = Math.min(...candies);
        if (least > most) break;
        total += least;
        temp = candies.indexOf(least);
        if (total == threshold) {
            answer.push(temp);
            break;
        } else if (total > threshold) break;
     
        answer.push(temp);
        candies[temp] = most + increment++;
    }

    return answer.sort((a, b) => a - b);
}