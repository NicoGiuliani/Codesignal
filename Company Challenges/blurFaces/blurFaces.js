function blurFaces(img) {
    const len = img.length;
    let outer = new Array(len);
    let i, j, n, tempSum;
    
    for (i = 0; i < len; i++) outer[i] = new Array(img[i].length);
    
    for (i = 0; i < len; i++) {
        for (j = 0; j < img[i].length; j++) {
            tempSum = 0;
            n = 0;
            
            if (j - 1 >= 0) {
                tempSum += img[i][j - 1];
                n++;
                if (i - 1 >= 0) {
                    tempSum += img[i - 1][j - 1];
                    n++;
                }
                if (i + 1 < len) {
                    tempSum += img[i + 1][j - 1];
                    n++;
                }
            }
            
            if (j + 1 < img[i].length) {
                tempSum += img[i][j + 1];
                n++;
                if (i - 1 >= 0) {
                    tempSum += img[i - 1][j + 1];
                    n++;
                }
                if (i + 1 < len) {
                    tempSum += img[i + 1][j + 1];
                    n++;
                }
            }
            
            if (i - 1 >= 0) {
                tempSum += img[i - 1][j];
                n++;
            }
            if (i + 1 < len) {
                tempSum += img[i + 1][j];
                n++;
            }
            
            outer[i][j] = tempSum / n;
        }
    }
    
    return outer;
}