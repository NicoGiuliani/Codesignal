function digitDifferenceSort(a) {
    let diffValue = new Array(a.length);
    let answer = new Array(a.length);
    
    a.map((x, i) => {
        x = x.toString().split('').sort((a, b) => a - b);
        diffValue[i] = x[x.length - 1] - x[0];
    });
    
    let index = answer.length - 1;
    let temp;
    
    let limit = Math.max(...diffValue);
    for (let i = limit; i > -1; i--) {
        temp = [];
        for (let j = 0; j < a.length; j++) {
            if (diffValue[j] == i) temp.push(a[j]);
        }
        for (let i in temp) answer[index--] = temp[i];
    } 
    
    return answer;
}