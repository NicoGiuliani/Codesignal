function sleddingHills(enjoyability, maxRuns) {
    let answer = 0;
    let mostEnjoyable, index;
    
    for (let i = 0; i < maxRuns; i++) {
        mostEnjoyable = Math.max(...enjoyability);
        index = enjoyability.indexOf(mostEnjoyable);
        answer += mostEnjoyable;
        if (enjoyability[index] > 0) enjoyability[index]--;
    }
    
    return answer;  
}