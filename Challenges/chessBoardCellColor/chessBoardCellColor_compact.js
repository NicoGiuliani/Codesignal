chessBoardCellColor = (cell1, cell2) => {
    v = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    x = [v.indexOf(cell1[0]), parseInt(cell1[1])];
    y = [v.indexOf(cell2[0]), parseInt(cell2[1])];
    return (x[0] % 2 == y[0] % 2) ? ((x[1] % 2 == y[1] % 2) ? 1 : 0) : (x[1] % 2 != y[1] % 2) ? 1 : 0
}