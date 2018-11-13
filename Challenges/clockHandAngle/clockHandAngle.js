function clockHandAngle(time) {
    time = time.split(':');
    
    let seconds = 0;
    seconds += parseInt(time[0]) * 3600;
    seconds += parseInt(time[1]) * 60;
    seconds += parseInt(time[2]);
    
    const hour = (seconds * (1/120)) % 360;    
    const minute = (parseInt(time[1]) + parseInt(time[2]) / 60) * 6;    
    const difference = Math.abs(minute - hour);
    
    if (difference > 180) return 360 - difference;
    else return difference;  
}