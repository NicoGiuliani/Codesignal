function flaviusJosephus(n) {
    let s = Math.pow(n, 2);
    let arr = new Array(s);
    let i, j;
    for (i = 1; i <= s; i++) arr[i - 1] = i;
    for (i = 2; i <= n; i++) {
       for (j = 0; j < s; j++) {
           if ((j + 1) % i == 0) arr[j] = -1;
       }
       arr = arr.filter(n => n != -1);
    }

    if (arr.length < n) return arr[arr.length - 1];
    else return arr[n - 1]
}