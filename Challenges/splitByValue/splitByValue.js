function splitByValue(k, elements) {
    let answer = new Array(elements.length);    
    let x = 0;
    let i;
    
    for (i = 0; i < answer.length; i++) {
        if (elements[i] < k) {
            answer[x] = elements[i];
            x++;
        }
    }
    
    for (i = 0; i < answer.length; i++) {
        if (elements[i] >= k) {
            answer[x] = elements[i];
            x++;
        }
    }
    
    return answer;
}
