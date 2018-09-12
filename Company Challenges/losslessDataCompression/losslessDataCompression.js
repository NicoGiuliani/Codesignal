function losslessDataCompression(inputString, width) {
    const inputArray = inputString.split('');
    let result = "";

    for (let i = 0; i < inputArray.length;) {
        // determines the window at this iteration
        let currentWindow = inputString.slice(Math.max(0, i - width), i);
        
        // if the current char isn't in the window, add it to the result and then increment i
        if (currentWindow.indexOf(inputArray[i]) < 0) result += inputArray[i++];
        else {
            // retrieves the indexes in currentWindow at which the current char exists
            let candidateIndexes = [];           
            for (let q = 0; q < currentWindow.length; q++) {
                if (currentWindow[q] === inputArray[i]) candidateIndexes.push(q);
            }
            
            let length = 0;
            let index = 0;

            // iterates through the candidateIndexes and finds the longest span among them
            for (let s = 0; s < candidateIndexes.length; s++) {
                let candidateLength = 0;
                for (let j = candidateIndexes[s]; j < currentWindow.length; j++) {
                    if (currentWindow[j] === inputArray[i + candidateLength]) {
                        candidateLength++;
                    } else break;
                }

                if (candidateLength > length) {
                    length = candidateLength;
                    index = candidateIndexes[s] + Math.max(0, i - width);
                }  
            }
    
            result += `(${index},${length})`
            i += length;
        }
    }
    return result;
}





/* OLDER VERSION */

// function losslessDataCompression(inputString, width) {
//     let window, temp, startIndex, substring;
//     let result = "";
//     let length = 0;
    
//     for (let i = 0; i < inputString.length; i++) {
        
//         window = (i < width) ? inputString.substring(0, i) : inputString.substring(i - width, i);
        
//         if (window.indexOf(inputString[i]) >= 0) {
//             length = 1;
//             temp = inputString[i];
            
//             for (let j = 1; (i + j) < inputString.length; j++) {
//                 temp += inputString[i + j];
//                 if (window.includes(temp)) length++;
//                 else break;
//             }
            
//             substring = window.indexOf(temp.substring(0, temp.length - 1));
//             startIndex = (i < width) ? substring : substring + i - width;
//             result += `(${startIndex},${length})`;
//             if (length > 1) i += length - 1;  
        
//         } else result += inputString[i];  
//     }  
//     return result;
// }