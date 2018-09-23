function treeBottom(tree) {
    let maxDepth = 0;
    let currentDepth = 0;
    let mostDistant = [];
    
    // determines maximum depth of the tree
    for (let i = 1; i < tree.length; i++) {
        if (tree[i] == '(' && tree[i+1] != ')') {
            currentDepth++;
            if (currentDepth > maxDepth) maxDepth = currentDepth;
        }
        else if (tree[i] == ')' && tree[i-1] != '(') currentDepth--;
    } 
    
    // Iterates through and captures all numbers at the greatest depth
    currentDepth = 0;
    for (let i = 1; i < tree.length; i++) {
        if (tree[i] == '(' && tree[i+1] != ')') currentDepth++;
        else if (tree[i] == ')' && tree[i-1] != '(') currentDepth--;
        else if (!isNaN(parseInt(tree[i])) && currentDepth == maxDepth) {
            let temp = "";
            let j = i;
            while (tree[j] != ' ') {
                temp += tree[j];
                j++;
                i++;
            }
            mostDistant.push(parseInt(temp));
        }
    }
    
    return mostDistant;
}