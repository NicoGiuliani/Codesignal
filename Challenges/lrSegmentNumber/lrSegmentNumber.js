function lrSegmentNumber(l, r) {
    let number = "";
    for (; l <= r; l++) number += l;
    return parseInt(number);
}