function isSanta(s) {
    const a = "It is Santa! Merry Christmas and a Happy New Year!";
    const b = "Hey, someone! Merry Christmas and have a nice day!";
    return ((/hohoho/i).test(s)) ? a : b;
}