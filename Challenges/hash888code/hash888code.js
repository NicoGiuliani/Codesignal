function hash888code(n) {
    const bin = Math.abs(n).toString(2);    
    let answer = "";
    answer += bin[0];
    
    for (let i = 1; i < bin.length; i++) {
        if (bin[i] != bin[i - 1]) answer += 1;
        else answer += 0;
    }

    return parseInt(answer, 2);       
}