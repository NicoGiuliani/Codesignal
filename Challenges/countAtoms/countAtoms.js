function countAtoms(molecule) {
    let molecules = [];
    let temp = molecule[0];

    for (let i = 1; i < molecule.length; i++) {
        if (molecule[i].toUpperCase() === molecule[i]) {
            molecules.push(temp);
            temp = molecule[i];
        } else temp += molecule[i];
        // console.log(temp);
    }
    molecules.push(temp);
    molecules = molecules.reverse();
    console.log(molecules);
    
    let multiplier = 1;
    for (let i = 0; i < molecules.length; i++) {
        // if it's a number
        if (!isNaN(molecules[i])) {
            multiplier = molecules[i]; 
            molecules[i] = '';
        } else if (molecules[i] == ')') {
            molecules[i] = '';
            console.log("inside parenthesis");
            let secondMult = -1;
            for (let j = i + 1; true; j++) {
                if (molecules[j] === '(') {
                    i = j;
                    molecules[i] = '';
                    break;
                } else if (!isNaN(molecules[j])) {
                    secondMult = multiplier * molecules[j];
                    molecules[j] = '';
                    // console.log(multiplier);
                    continue;
                }
                console.log(molecules[j]);
                if (secondMult > 0) {
                    molecules[j] += secondMult;
                    secondMult = -1;
                } else {
                    molecules[j] += multiplier;    
                }
                
            }
            console.log("outside parenthesis");
            multiplier = 1;
            
        } else {
            console.log(multiplier);
            molecules[i] += multiplier;
        }
        
    }
    
    console.log(molecules);
        
}
