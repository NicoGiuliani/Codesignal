function dresses(colors) {
    const hex = { 'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15 }
    let red, green, blue, r, g, b;
    let list = [];
        
    for (let i = 0; i < colors.length; i++) {
        red = colors[i].slice(0, 2);
        green = colors[i].slice(2, 4);
        blue = colors[i].slice(4, 6);
        
        r = 0;        
        r += (isNaN(red[0])) ? hex[red[0]] * 16 : red[0] * 16;   
        r += (isNaN(red[1])) ? hex[red[1]] : parseInt(red[1])
        
        g = 0;        
        g += (isNaN(green[0])) ? hex[green[0]] * 16 : green[0] * 16;   
        g += (isNaN(green[1])) ? hex[green[1]] : parseInt(green[1])
        
        b = 0;        
        b += (isNaN(blue[0])) ? hex[blue[0]] * 16 : blue[0] * 16;   
        b += (isNaN(blue[1])) ? hex[blue[1]] : parseInt(blue[1])        
        
        if (g > r && g > b) list.push(i);   
    }
    
    return list;  
}