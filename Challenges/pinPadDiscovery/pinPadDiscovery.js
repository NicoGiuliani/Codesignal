function pinPadDiscovery(logins) {
    if (logins.length == 1) return "????";
    else {
        let pin = "";
        let temp, x, y, values;
        
        for (x = 0; x < 4; x++) {
            temp = logins[0][x].split('');
                        
            for (y = 1; y < logins.length; y++) {
                values = logins[y][x].split('');
                if (!values.includes(temp[0])) temp[0] = '';
                if (!values.includes(temp[1])) temp[1] = '';
            }
            
            temp = temp.filter(i => i != '');            
            pin += (temp.length == 1) ? temp[0] : '?';
        }
        
        return pin;
    }
}