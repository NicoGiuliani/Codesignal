function timedReading(maxLength, text) {
    const regex = /[a-zA-Z]+/g;
    let found = text.match(regex);
    let counter = 0;
    if (found) found.map(x => {
        if (x.length <= maxLength) counter++;
    });
    return counter;
}