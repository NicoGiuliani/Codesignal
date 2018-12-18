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



sleddingHills = (e, r) => {
    a = 0
    for (i = 0; i < r; i++) {
        m = Math.max(...e)
        j = e.indexOf(m)
        a += m
        if (e[j] > 0) e[j]--
    }
    return a  
}