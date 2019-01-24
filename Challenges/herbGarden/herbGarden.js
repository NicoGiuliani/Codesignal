function herbGarden(plants, days) {
    
    let leaves = 0;
    let chosen, index, half, rounded, tempIndex;
    
    for (let i = 0; i < days; i++) {
        console.log(plants);
        chosen = Math.max(...plants);
        index = plants.indexOf(chosen);
        half = chosen / 2;
        rounded = Math.floor(half);
        
        if (rounded !== half) {
           console.log("decimal value", half);
           tempIndex = plants.indexOf(rounded * 2);
           console.log("tempIndex", tempIndex);
                
           if (tempIndex > -1) {
              index = tempIndex;
              chosen = plants[index];
           }  
            
        }
        
        
        console.log("rounded", rounded);
        leaves += rounded;
        plants[index] = chosen - rounded;
        
        console.log(plants);
                    
        // over night
        for (let j = 0; j < plants.length; j++) plants[j] += 2;
        
        console.log('l', leaves);
        console.log("--------------");
    }
    
    return leaves;
    
    
}
