function computerNetwork(n, network) {
    let current = 1;
    let distance = 0;
    
    network = network.sort((a, b) => a[2] - b[2]);
    
    const trackDistance = (index, n) => {
        distance += network[index][2];
        current = network[index][n];
        return -1;
    }

    for (let i = 0; current < n; i++) { 
        if (network[i][0] < current || network[i][1] < current) continue;
        if (network[i][1] != current && network[i][0] == current) i = trackDistance(i, 1);
        else if (network[i][0] != current && network[i][1] == current) i = trackDistance(i, 0);        
    }
    
    return distance;    
}