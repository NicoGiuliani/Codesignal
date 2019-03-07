function easyAssignmentProblem(skills) {
    let schedule = [0, 0];
    const adv1 = skills[0][0] - skills[1][0];    
    const adv2 = skills[0][1] - skills[1][1];
    
    schedule[0] = (adv1 > adv2) ? 1 : 2;
    schedule[1] = (schedule[0] == 1) ? 2 : 1;
    
    return schedule;
}