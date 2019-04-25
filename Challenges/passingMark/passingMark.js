function passingMark(passMark, grades) {
    const values = {
        'A': 5,
        'B': 4,
        'C': 3,
        'D': 2,
        'E': 1
    }
    
    let total = 0;
    for (let i in grades) {
        total += values[grades[i]];
    }
    
    const gpa = total / grades.length;
    return (gpa >= passMark);
}