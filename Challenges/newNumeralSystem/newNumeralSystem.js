function newNumeralSystem(number) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const num = alphabet.indexOf(number);
    const len = Math.floor(num / 2) + 1;
    let answer = new Array(len);
    
    for (let i = 0; i < len; i++) {
        answer[i] = alphabet[i] + " + " + alphabet[num - i];
    }
    
    return answer;
}