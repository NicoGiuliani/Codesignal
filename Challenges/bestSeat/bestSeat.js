function bestSeat(classLayout) {
    let friendliest = -1;
    let spot = [-1, -1];
    let x, y, temp;
    
    for (y = 0; y < classLayout.length; y++) {
        for (x = 0; x < classLayout[y].length; x++) {
            if (classLayout[y][x] === -1) {
                
                temp = 0;
        
                if (classLayout[y][x-1]) temp += classLayout[y][x-1];
                if (classLayout[y][x+1]) temp += classLayout[y][x+1];
                
                if (classLayout[y-1]) {
                    temp += classLayout[y-1][x];
                    if (classLayout[y-1][x-1]) temp += classLayout[y-1][x-1];
                    if (classLayout[y-1][x+1]) temp += classLayout[y-1][x+1];
                }
                    
                if (classLayout[y+1]) {
                    temp += classLayout[y+1][x];
                    if (classLayout[y+1][x-1]) temp += classLayout[y+1][x-1];
                    if (classLayout[y+1][x+1]) temp += classLayout[y+1][x+1];
                }
                
                temp = (temp > 0) ? temp : 0;
                
                if (temp > friendliest) {
                    friendliest = temp;
                    spot = [y, x];
                }
            }
        }
    }
    
    return spot;
}