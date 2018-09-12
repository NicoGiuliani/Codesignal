function campusCup(emails) {
    let hash = {};
    let spaceGranted = [];
    let scoreboard = [];
    let additionalSpace = 0;
    let points;
    
    // split the emails and store them into a hash based on their domain
    for (let i = 0, split; i < emails.length; i++) {
        split = emails[i].split('@');
        if (hash[split[1]] == null) hash[split[1]] = [split[0]];
        else hash[split[1]].push(split[0]);
    }

    // determines the additional space granted to each school
    for (key in hash) {
        points = hash[key].length * 20;
        additionalSpace = 0;
        if (points >= 100) additionalSpace = 3; 
        if (points >= 200) additionalSpace = 8;
        if (points >= 300) additionalSpace = 15;
        if (points >= 500) additionalSpace = 25;
        spaceGranted.push(additionalSpace);
        hash[key] = additionalSpace;    
    }
    
    spaceGranted.sort((a, b) => b - a);

    for (let i = 0, max, temp; scoreboard.length < spaceGranted.length; i++) {
        max = spaceGranted[i];
        temp = [];
        // pulls out all schools that have the current highest score
        for (key in hash) if (hash[key] == max) temp.push(key);
        // if there are multiple with the same additional space, they're sorted lexicographically
        if (temp.length > 1) temp.sort();
        scoreboard = scoreboard.concat(temp);
    }
    
    return scoreboard;    
}