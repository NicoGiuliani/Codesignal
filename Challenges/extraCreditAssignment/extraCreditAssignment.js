function extraCreditAssignment(decimal, denominator) {
    const data = (decimal.match(/\(\d+\)/) != null) ? decimal.match(/\(\d+\)/) : null;
    let value;
    if (data != null) {
        value = data[0].slice(1, -1);
        value = value.repeat(6);
        decimal = decimal.replace(/\(\d+\)/, value);
    }
    return Math.round(decimal * denominator);
}