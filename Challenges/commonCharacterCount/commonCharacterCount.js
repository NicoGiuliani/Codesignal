function commonCharacterCount(s1, s2) {
    s1 = s1.split('');
    s2 = s2.split('');
    let counter = 0;
    let x;
    
    for (let i in s1) {
        console.log(s2.indexOf(s1[i]));
        if ((x = s2.indexOf(s1[i])) >= 0) {
            counter++;
            s2[x] = 0;
        }
    }
    
    return counter;
}
