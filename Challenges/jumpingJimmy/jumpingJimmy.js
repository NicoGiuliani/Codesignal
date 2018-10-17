function jumpingJimmy(tower, jumpHeight) {
    let totalHeight = 0;
    for (let i = 0; i < tower.length; i++) {
        if (tower[i] <= jumpHeight) totalHeight += tower[i];
        else break;
    }
    return totalHeight;
}