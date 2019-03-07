easyAssignmentProblem = s => {
    a = [0, 0]
    x = s[0][0] - s[1][0]    
    y = s[0][1] - s[1][1]
    
    a[0] = (x > y) ? 1 : 2
    a[1] = (a[0] == 1) ? 2 : 1
    
    return a
}