export class Time {

    date;
    timeStart;
    timeEnd;
    
    constructor(date = new Date(), timeStart = new Date().toTimeString(), timeEnd = new Date().toTimeString()) {
        this.date       = date;
        this.timeStart  = timeStart;
        this.timeEnd    = timeEnd;
    }
}