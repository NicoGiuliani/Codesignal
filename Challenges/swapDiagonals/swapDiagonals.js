function swapDiagonals(matrix) {
    let temp;
    for (let i = 0; i < matrix.length; i++) {
        temp = matrix[i][i];
        matrix[i][i] = matrix[i][matrix.length - 1 - i];
        matrix[i][matrix.length - 1 - i] = temp;
    }
    
    return matrix;
}