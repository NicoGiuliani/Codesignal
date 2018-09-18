function newSortOrder(docIDs) {
    let letters = [];
    let numbers = [];
    let valid, temp;
    
    for (i in docIDs) {
        valid = true;
        if (isNaN(docIDs[i][0])) {
            if (docIDs[i][0] == 'X') {
                temp = "";
                for (j in docIDs[i]) {
                    if (j != 0 && j != docIDs[i].length - 1) {
                        if (docIDs[i][j] == 'X') { temp = ""; break; }
                        else if (isNaN(docIDs[i][j])) temp += docIDs[i][j];  
                    }
                }
                if (temp.length > 0) letters.push(temp); 
            } 
            else {
                for (j in docIDs[i]) if (docIDs[i][j] == 'X') { valid = false; break; }
                if (valid && docIDs[i] != "") letters.push(docIDs[i]); 
            }
        } else numbers.push(docIDs[i]);

    }
    return letters.sort().concat(numbers.sort((a, b) => b[0] - a[0]));
}