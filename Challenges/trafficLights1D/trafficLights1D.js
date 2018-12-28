function trafficLights1D(roadMap) {
    let position = 0;
    let time = 0;
    let red;
    
    for (let i = 0; i < roadMap.length; i++) {
        time += (roadMap[i][0] - position);
        position = roadMap[i][0];
        red = Math.floor(time / roadMap[i][1]) % 2;        
        if (red) time = (Math.floor(time / roadMap[i][1]) + 1) * roadMap[i][1];
    }
    
    return time;
}