function studyOrSleep(familiarity, hoursRemaining) {
    let unfamiliarity, possible, penalty, i;
    let potentialFamiliarity = familiarity;
    for (i = 0; i <= hoursRemaining; i++) {
        unfamiliarity = (100 - familiarity) * Math.pow(0.8, i);
        penalty = (hoursRemaining - i <= 8) ? ((8 - hoursRemaining + i) * 5) : 0;
        possible = (100 - unfamiliarity) - penalty;
        if (i > 0 && possible <= potentialFamiliarity) return (i - 1 > -1) ? i - 1 : 0;
        else potentialFamiliarity = possible;
    }
    return i - 1;
}