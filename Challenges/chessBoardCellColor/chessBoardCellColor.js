function chessBoardCellColor(cell1, cell2) {
    const values = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const c1 = [values.indexOf(cell1[0]), parseInt(cell1[1])];
    const c2 = [values.indexOf(cell2[0]), parseInt(cell2[1])];
    
    if ((c1[0] % 2) == (c2[0] % 2)) {
        if ((c1[1] % 2) == (c2[1] % 2)) return true;
    } else {
        if ((c1[1] % 2) != (c2[1] % 2)) return true;
    }
    return false;
}