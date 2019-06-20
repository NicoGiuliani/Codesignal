function cipher26(message) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let decrypted = message[0];
    let runningTotal = alphabet.indexOf(message[0])
    let i, x, targetValue;
    
    for (i = 1; i < message.length; i++) {
        targetValue = alphabet.indexOf(message[i]);        
        x = 0;
        while ((runningTotal + x) % 26 != targetValue) x++;
        runningTotal += x;
        decrypted += alphabet[x];
    }
    
    return decrypted;
}