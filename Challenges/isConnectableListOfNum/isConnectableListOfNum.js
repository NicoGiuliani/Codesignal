function isConnectableListOfNum(listOfNum) {
    listOfNum = listOfNum.sort((a, b) => a.length - b.length);
    let regex = new RegExp("^" + listOfNum[0]);
        
    for (let i = 1; i < listOfNum.length; i++) {
        if (regex.test(listOfNum[i])) return false;
    }
    
    return true;
}