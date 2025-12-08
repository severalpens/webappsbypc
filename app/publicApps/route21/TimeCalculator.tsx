import timetables from "./timetables";

export default class TimeCalculator {
    timetableToday: Array<any>;
    timetableTomorrow: Array<any>;
    midnightEpochSeconds: number;
    midnightTonightEpochSeconds: number;
    locationId: number;
    directionId: number;

    constructor() {
        this.locationId = -1;
        this.directionId = -1;
        this.midnightEpochSeconds = -1;
        this.midnightTonightEpochSeconds = -1;
        this.timetableToday = [];
        this.timetableTomorrow = [];
    }



    getMidnight() {
        let date = new Date();
        date.setHours(0, 0, 0, 0);
        return date.getTime() / 1000;
    }

    getFormattedTime(s: number) {
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        var hrs = (s - mins) / 60;

        return hrs ? hrs + ':' + mins + ':' + secs : hrs + ':' + mins + ':' + secs;
    }


    setTimetable(dayId: number, locationId: number, directionId: number) {
        return timetables.filter(x => {
            let isDay = x.dayId === dayId;
            let isLoc = x.locationId === locationId;
            let isDir = x.directionId === directionId;
            return isDay && isLoc && isDir;
        });
    }

    
    getNextTimetableSeconds(dt: Date) {
        
        let timesRemainingToday = this.timetableToday.filter((t: { secondsFromMidnight: number; }) => {
            let tEpochSeconds = this.midnightEpochSeconds + t.secondsFromMidnight;
            return tEpochSeconds > Math.floor(dt.getTime() / 1000);
        });

        if(timesRemainingToday.length > 0){
            return this.midnightEpochSeconds + timesRemainingToday[0].secondsFromMidnight;
        }
        else{
            //If no times remaining today, get first arrival from tomorrow's timetable.
            let nextMidnight = this.midnightEpochSeconds + (24 * 60 * 60);
            let firstArrivalTomorrow = this.timetableTomorrow[0].secondsFromMidnight;
            return nextMidnight + firstArrivalTomorrow;
        }
    }




    next(locationId: number, directionId: number) {
        let dt = new Date();
        this.midnightEpochSeconds = this.getMidnight();
        let dayId = dt.getDay();

        switch (dayId) {
            case 5: //Friday
                this.timetableToday = this.setTimetable(1, locationId, directionId);
                this.timetableTomorrow = this.setTimetable(6, locationId, directionId);
                break;

            case 6: //Saturday
                this.timetableToday = this.setTimetable(6, locationId, directionId);
                
                this.timetableTomorrow = this.setTimetable(0, locationId, directionId);
                break;

            case 0: //Sunday
                this.timetableToday = this.setTimetable(0, locationId, directionId);
                this.timetableTomorrow = this.setTimetable(1, locationId, directionId);
                break;

            default: // Other weekdays
                this.timetableToday = this.setTimetable(1, locationId, directionId);
                this.timetableTomorrow = this.setTimetable(1, locationId, directionId);
                break;
        }
        
        let nowEpochSeconds = Math.floor(dt.getTime() / 1000);
        let s1 = 0;
        
        let timesRemainingToday = this.timetableToday.filter((t: { secondsFromMidnight: number; }) => {
            let tEpochSeconds = this.midnightEpochSeconds + t.secondsFromMidnight;
            return tEpochSeconds > Math.floor(dt.getTime() / 1000);
        });

        if(timesRemainingToday[0]){
            if(dayId === 6 && locationId === 0 && directionId === 0){
                console.log('getting times remaining today');
                console.log(timesRemainingToday);
            }
            s1 = this.midnightEpochSeconds + timesRemainingToday[0].secondsFromMidnight;
        }
        else{
            //If no times remaining today, get first arrival from tomorrow's timetable.
            let nextMidnight = this.midnightEpochSeconds + (24 * 60 * 60);
            let firstArrivalTomorrow = this.timetableTomorrow[0].secondsFromMidnight;
            s1 = nextMidnight + firstArrivalTomorrow;
        }

      //  let s = this.getNextTimetableSeconds(dt) - nowEpochSeconds;
        let s = s1 - nowEpochSeconds;
        return this.getFormattedTime(s);

    }

}