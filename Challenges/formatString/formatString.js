function formatString(input) {
    input = input.split(' ');
    input = input.filter(x => x != '');
    return input.join(' '); 
}