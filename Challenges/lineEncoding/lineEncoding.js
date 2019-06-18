function lineEncoding(s) {
    let answer = "";
    let current = s[0];
    let count = 1;
    
    for (let i = 1; i <= s.length; i++) {
        if (s[i] == current) count++;
        else if (s[i] != current || i == s.length - 1) {
            if (count > 1) answer += count;
            answer += current;
            current = s[i];
            count = 1;
        }
    }
    
    return answer;
}