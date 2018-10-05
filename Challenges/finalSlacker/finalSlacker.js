function finalSlacker(weights, scores) {
    let percents = [0, 0, 0];
    let i;
    
    let assignmentScore = 0;
    for (i in scores[0]) assignmentScore += scores[0][i];
    const assignmentTotal = 10 * scores[0].length;
    percents[0] = assignmentScore / assignmentTotal;
    
    let quizScore = 0;
    for (i in scores[1]) quizScore += scores[1][i];
    const quizTotal = 5 * scores[1].length;
    percents[1] = quizScore / quizTotal;
    
    let testScore = 0;
    let testTotal;
    for (i in scores[2]) testScore += scores[2][i];
    testTotal = 100 * scores[2].length;
    percents[2] = testScore / testTotal;

    let currentGrade = 0;
    for (let i in percents) currentGrade += weights[i] * percents[i];
    
    let lowerLimit = Math.floor(currentGrade / 10) * 10;
    if (lowerLimit < 60) lowerLimit = 0;
    
    let accounted = weights[0] * percents[0] + weights[1] * percents[1];
    let necessaryGrade = Math.ceil(((testTotal + 100) * (lowerLimit - accounted) / weights[2]) - testScore);
    
    return (necessaryGrade > 0) ? necessaryGrade : 0;    
}