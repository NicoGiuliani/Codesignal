function encodingDecoding(message) {
    
    if (message.length == 0) return '';
    
    if (isNaN(message[0])) { 
        let encoded = "";
        for (let i in message) {
            let char = (parseInt(message.charCodeAt(i)) + parseInt(i)).toString(16);
            encoded += char;
        }
        return encoded; 
    }
    else {    
        console.log('t');
        let sliceArr = [];
        let alpha = ['a', 'b', 'c', 'd', 'e', 'f'];
        let num = [10, 11, 12, 13, 14, 15];
        let newHex = [0, 0];
        let dec, t;
        let counter = 0;
        
        for (let i = 0; i < message.length; i += 2) {
                let snip = message.slice(i, i + 2);
                console.log("snip", snip);
                
                if ((/[a-z]+/).test(snip)) {
                        alpha = ['a', 'b', 'c', 'd', 'e', 'f'];
                        num = [10, 11, 12, 13, 14, 15];
                        newHex = [0, 0];
                        
                        dec = (parseInt(sliceArr[i][0]) * 16) + num[alpha.indexOf(sliceArr[i][1])] - i;
                        t = alpha[num.indexOf(dec % 16)];
                        newHex[0] = Math.floor(dec/16);
                        newHex[1] = (t != -1) ? t : (dec % 16);
                        
                } 
                else {
                    snip -= counter++;
                    sliceArr.push(snip);   
                }
                
        }
                
        let decoded = "";
        for (let i = 0; i < sliceArr.length; i++) {
                decoded += String.fromCharCode(parseInt(sliceArr[i], 16));
        }
        return decoded;
            
    } 
   
}