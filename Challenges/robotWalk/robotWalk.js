function robotWalk(a) {
    let coordinates = [a[1], a[0] - a[2]];
    let lastX = a[1];
    let lastY = a[2];
    let xDirection = "left";
    let yDirection = "up";
    
    for (let i = 3; i < a.length; i++) {
        if ((i % 2 == 1 && a[i] >= lastX) || (i % 2 == 0 && a[i] >= lastY)) return true;
        else {
            if (i % 2 == 1) {
                if (xDirection == "left") coordinates[0] -= a[i];
                else coordinates[0] += a[i];
                lastX = a[i];
                xDirection = (xDirection == "left") ? "right" : "left";
            } else {
                if (yDirection == "up") coordinates[1] += a[i];
                else coordinates[1] -= a[i];
                lastY = a[i];
                yDirection = (yDirection == "up") ? "down" : "up";
            }
        }
    }
    
    return false;
}