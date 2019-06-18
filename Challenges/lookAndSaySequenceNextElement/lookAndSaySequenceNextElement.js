function lookAndSaySequenceNextElement(element) {
    let digit;
    let count;
    let answer = "";
    
    for (let i = 0; i < element.length;) {
        digit = element[i];
        count = 1;
        for (let j = i + 1; j < element.length; j++) {
            if (element[j] == digit) count++;
            else break;
        }
        
        answer += count;
        answer += digit;        
        i += count;
        
    }
    
    return answer;
}