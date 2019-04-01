function isTandemRepeat(inputString) {
    const len = inputString.length;
    if (len % 2 != 0) return false;
    const half = inputString.substring(0, len / 2);
    return (inputString != half + half) ? false : true;
}
