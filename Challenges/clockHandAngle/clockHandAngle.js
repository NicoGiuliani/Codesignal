function clockHandAngle(time) {
    time = time.split(':');
    console.log(time);
    
    let seconds = 0;
    seconds += (parseInt(time[0]) * 3600);
    seconds += (parseInt(time[1]) * 60);
    seconds += (parseInt(time[2]));
    const hourhand = (seconds * (1/120)) % 360;
    console.log(hourhand);
    
    const minutehand = (parseInt(time[1]) + (parseInt(time[2]) / 60)) * 6;
    console.log(minutehand);
    
    return Math.abs(hourhand - minutehand);
    
}
