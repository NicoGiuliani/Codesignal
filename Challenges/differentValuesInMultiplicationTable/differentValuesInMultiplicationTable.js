function differentValuesInMultiplicationTable(n, m) {
    let products = new Array(6);
    let index = 0;
    for (let i = 1, j; i <= n; i++) {
        for (j = 1; j <= m; j++) {
            products[index++] = i * j;
        }
    }
    return [...new Set(products)].length;
}