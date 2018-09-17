function rome(n) {
    let numeral = "";
    let temp, place, j;
    
    n = n.toString().split(''); 
    const digits = n.length;
    
    for (let i = 0; i < n.length; i++) {
        if (n[i] == 0) continue;
        else {
            place = Math.pow(10, digits - i - 1);
            
            if (place == 100) {
                if (n[i] == 9) numeral += "CM";
                else if (n[i] == 4) numeral += "CD";
                else {
                    if (n[i] < 5) {
                        temp = "";
                        for (j = 0; j < n[i]; j++) temp += "C";
                    } else {
                        temp = "D";
                        for (j = 5; j < n[i]; j++) temp += "C";
                    }    
                    numeral += temp;
                }   
            }
            else if (place == 10) {
                if (n[i] == 9) numeral += "XC";
                else if (n[i] == 4) numeral += "XL";
                else {
                    if (n[i] < 5) {
                        temp = "";
                        for (j = 0; j < n[i]; j++) temp += "X";
                    } else {
                        temp = "L";
                        for (j = 5; j < n[i]; j++) temp += "X";
                    }    
                    numeral += temp;
                }   
            } 
            else if (place == 1) {
                if (n[i] == 9) numeral += "IX";
                else if (n[i] == 4) numeral += "IV";
                else {
                    if (n[i] < 5) {
                        temp = "";
                        for (j = 0; j < n[i]; j++) temp += "I";
                    } else {
                        temp = "V";
                        for (j = 5; j < n[i]; j++) temp += "I";
                    }    
                    numeral += temp;
                }      
            } 
            else {
                for (j = 0; j < n[i]; j++) numeral += "M";
            }
            
        }
        
    }
    
    return numeral;
}