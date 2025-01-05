function angleClock(hour: number, minutes: number): number {

    const minuteAngle = 6 * minutes;
    const hourAngle = (30 * (hour % 12)) + (0.5 * minutes);
    let angle = Math.abs(hourAngle - minuteAngle);

    return Math.min(angle, 360 - angle);
    
};