function pepEight2(line) {
    line = line.split('');
    line.filter(x => x == ' ');
    return (line.length <= 79);
}