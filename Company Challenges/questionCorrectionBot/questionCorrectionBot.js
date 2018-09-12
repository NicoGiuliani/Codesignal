function questionCorrectionBot(question) {
    let result = "";
    let firstChar = true;
    let startIndex, q, r;
    question = question.split('');
    
    const checkEnd = (index, end) => {
        if (index == end) {
            result += '?';
            return true;
        } else return false;
    }  

    for (let i = 0; i < question.length; i++) {
        if (firstChar) {
            if (question[i] != ' ') {
                result += question[i].toUpperCase();
                checkEnd(i, question.length - 1);
                firstChar = false;
            }        
        } else {
            // if the current char is a space
            if (question[i] == ' ') {
                startIndex = i;
                while (question[startIndex] == ' ') startIndex++;
                if (checkEnd(startIndex, question.length)) return result;
                else if (question[startIndex] != ',') result += ' ';   
                else {
                    result += ', ';
                    startIndex++;
                    q = startIndex;
                    while (question[q] == ' ') q++;                    
                    startIndex += q - startIndex; 
                }
                i += startIndex - i;
            }
            
            // if the current char is a comma
            else if (question[i] == ',') {
                r = i;
                while (question[r] == ' ') r++;
                result += ', ';
                r++;
                if (checkEnd(i, question.length - 1)) return result;
                i += r - i;
            }
            
            // if the last char is already a question mark
            else if (question[i] == '?') {
                result += '?';
                return result;
            } 
            
            // otherwise just add the char to result
            result += question[i];
            checkEnd(i, question.length - 1);    
        }
       
    }
    return result;
}