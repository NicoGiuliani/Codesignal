function isSkewSymmetricMatrix(matrix) {
    let fixed = 0;
    
    while (fixed < matrix.length) {

        for (let i = 0; i < matrix.length; i++) {
            if (matrix[fixed][i] != matrix[i][fixed] * -1) return false;
        }

        fixed++;
    }
    
    return true;
}