function herbGarden(plants, days) {
    
    let leaves = 0;
    
    for (let i = 0; i < days; i++) {
        // morning
        console.log(plants);
        let m = Math.max(...plants);
        let index = plants.indexOf(m);
        console.log('m', m);
        
        let collection = Math.floor(m / 2);
        console.log('c', collection);
        leaves += collection;
        plants[index] = m - collection;
        
        console.log(plants);
        
        // over night
        for (let j = 0; j < plants.length; j++) plants[j] += 2;
        
        console.log('l', leaves);
        console.log("--------------");
    }
    
    console.log(leaves);
    return leaves;
    
    
}
