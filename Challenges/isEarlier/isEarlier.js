function isEarlier(time1, time2) {
    return (time1[0] < time2[0] || (time1[0] == time2[0] && time1[1] < time2[1])) ? 1 : 0;
}