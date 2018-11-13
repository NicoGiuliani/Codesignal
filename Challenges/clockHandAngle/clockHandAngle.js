function clockHandAngle(time) {
    time = time.split(':');
    const seconds = parseInt(time[0]) * 3600 + parseInt(time[1]) * 60 + parseInt(time[2]);
    const hour = seconds * (1 / 120) % 360;    
    const minute = (parseInt(time[1]) + parseInt(time[2]) / 60) * 6;    
    const difference = Math.abs(minute - hour);
    return (difference > 180) ? 360 - difference : difference;
}