function sweetestSpoonful(marshmallows, woodenPieces) {
    let sum, counter;
    let none = true;
    let sweetest = 0;
    let maxIndex = [0, 0];
    
    for (let i = 0; i < marshmallows.length; i++) { 
        
        for (let j = 0; j < marshmallows[0].length; j++) {
            counter = 0;
            
            sum = (marshmallows[i][j] - 2 * woodenPieces[i][j]);
            if (marshmallows[i][j-1]) sum += (marshmallows[i][j-1] - 2 * woodenPieces[i][j-1]);
            if (marshmallows[i][j+1]) sum += (marshmallows[i][j+1] - 2 * woodenPieces[i][j+1]);
            
            if (marshmallows[i][j] == 0 || woodenPieces[i][j] == 0) counter++;
            if (marshmallows[i][j-1] == 0 || woodenPieces[i][j-1] == 0) counter++;
            if (marshmallows[i][j+1] == 0 || woodenPieces[i][j+1] == 0) counter++;
            
            if (marshmallows[i-1]) {
                if (marshmallows[i-1][j]) sum += (marshmallows[i-1][j] - 2 * woodenPieces[i-1][j]);
                if (marshmallows[i-1][j-1]) sum += (marshmallows[i-1][j-1] - 2 * woodenPieces[i-1][j-1]);
                if (marshmallows[i-1][j+1]) sum += (marshmallows[i-1][j+1] - 2 * woodenPieces[i-1][j+1]);
                
                if (marshmallows[i-1][j] == 0 || woodenPieces[i-1][j] == 0) counter++;
                if (marshmallows[i-1][j-1] == 0 || woodenPieces[i-1][j-1] == 0) counter++;
                if (marshmallows[i-1][j+1] == 0 || woodenPieces[i-1][j+1] == 0) counter++;  
            }
        
            if (marshmallows[i + 1]) {
                if (marshmallows[i+1][j]) sum += (marshmallows[i+1][j] - 2 * woodenPieces[i+1][j]);
                if (marshmallows[i+1][j-1]) sum += (marshmallows[i+1][j-1] - 2 * woodenPieces[i+1][j-1]);
                if (marshmallows[i+1][j+1]) sum += (marshmallows[i+1][j+1] - 2 * woodenPieces[i+1][j+1]); 
                
                if (marshmallows[i+1][j] == 0 || woodenPieces[i+1][j] == 0) counter++;
                if (marshmallows[i+1][j-1] == 0 || woodenPieces[i+1][j-1] == 0) counter++;
                if (marshmallows[i+1][j+1] == 0 || woodenPieces[i+1][j+1] == 0) counter++;
            }
            
            if (counter != 9 && sum > sweetest) {
                if (sum > 0) none = false;
                sweetest = sum;
                maxIndex = [i, j];    
            }
             
        }
           
    }
    return (none) ? [-1, -1] : maxIndex;
}