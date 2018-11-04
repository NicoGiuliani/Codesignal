function fallBack(time) {
    let clock = time.split(':');
    if (clock[0] == 12) {
        let temp = clock[1].split('');
        temp[2] = (temp[2] == 'A') ? 'P' : 'A';
        temp = temp.join('');
        clock[1] = temp;
    }
    let hour = --(clock[0]);
    clock[0] = (hour === 0) ? 12 : hour;
    return clock.join(':');
}