function arrayElementsProduct(inputArray) {
    let product = 1;
    for (let i in inputArray) product *= inputArray[i];
    return product;
}