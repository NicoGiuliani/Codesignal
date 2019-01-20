function countAtoms(molecule) {

    let molecules = [];
    let temp = molecule[0];
    for (let i = 1; i < molecule.length; i++) {
        if (molecule[i] == molecule[i].toUpperCase()) {
            molecules.push(temp);
            temp = molecule[i];
        } else temp += molecule[i];
    }
    molecules.push(temp);
    console.log(molecules);
    
    let multipliers = [1];
    let lastMult = 1;
    molecules = molecules.reverse();
    console.log(molecules);
    
    for (let i = 0; i < molecules.length; i++) {
        if (!isNaN(molecules[i])) {
            lastMult *= molecules[i];
            multipliers.push(lastMult);
            molecules[i] = '';
        } else if (molecules[i] == ')' || molecules[i] == ']') {
            for (let j = i + 1; true; j++) {
                if (molecules[j] == '(' || molecules[j] == '[') {
                    multipliers.pop();
                    lastMult = multipliers[multipliers.length - 1];
                    i = j;
                    break;
                } else if (!isNaN(molecules[j]) {
                    lastMult *= molecules[i];
                    multipliers.push(lastMult);
                    molecules[i] = '';               
                } else {
                    console.log("lastMult", lastMult);
                    molecules[j] += lastMult;
                    console.log(molecules[j]);
                }
            }
            console.log(molecules);
        } else {
            molecules[i] += lastMult;
        }
        
        
    }
    console.log(molecules);
        
}
