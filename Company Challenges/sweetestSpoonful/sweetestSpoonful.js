function sweetestSpoonful(marshmallows, woodenPieces) {
    let total;
    let none = true;
    let currentSweetest = 0;
    let potentialMax = [0, 0];
    
    
    for (let i = 0; i < marshmallows.length; i++) {
        
        for (let j = 0; j < marshmallows[0].length; j++) {

            total = (marshmallows[i][j] - 2 * woodenPieces[i][j]);
            
            if (marshmallows[i][j-1]) total += (marshmallows[i][j-1] - 2 * woodenPieces[i][j-1]);
            if (marshmallows[i][j+1]) total += (marshmallows[i][j+1] - 2 * woodenPieces[i][j+1]);
            
            if (marshmallows[i - 1]) {
                if (marshmallows[i-1][j]) total += (marshmallows[i-1][j] - 2 * woodenPieces[i-1][j]);
                if (marshmallows[i-1][j-1]) total += (marshmallows[i-1][j-1] - 2 * woodenPieces[i-1][j-1]);
                if (marshmallows[i-1][j+1]) total += (marshmallows[i-1][j+1] - 2 * woodenPieces[i-1][j+1]);
            }
            
            if (marshmallows[i + 1]) {
                if (marshmallows[i+1][j]) total += (marshmallows[i+1][j] - 2 * woodenPieces[i+1][j]);
                if (marshmallows[i+1][j-1]) total += (marshmallows[i+1][j-1] - 2 * woodenPieces[i+1][j-1]);
                if (marshmallows[i+1][j+1]) total += (marshmallows[i+1][j+1] - 2 * woodenPieces[i+1][j+1]); 
            }
            
            console.log(total);        
    
            if (total > 0) none = false;
            if (total > currentSweetest) {
                currentSweetest = total;
                potentialMax = [i, j];
                console.log(potentialMax);
            }
            
        }
           
    }
    
    if (none) return [-1, -1];
    return potentialMax;
}
