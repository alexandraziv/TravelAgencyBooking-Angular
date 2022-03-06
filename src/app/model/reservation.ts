export class Reservation {
    name: string;
    lastName: string;
    from: ReservationDate;
    to: ReservationDate;
    

    constructor(obj?:any) {
        this.name = obj && obj.name || "";
        this.lastName = obj && obj.lastName || "";
        this.from = obj && obj.from || new ReservationDate();
        this.to = obj && obj.to || new ReservationDate();
    }

    calculateDateDiff(): number {
        let millisInDay = 24*60*60*1000;

        let fromDate = new Date(this.from.year, this.from.month, this.from.day);
        let toDate = new Date(this.to.year, this.to.month, this.to.day);

        let diffDays = Math.round((toDate.getTime() - fromDate.getTime())/millisInDay)

        return diffDays
    }
}

export class ReservationDate {
    day: number;
    month: number;
    year: number;


    constructor(obj?:any) {
        this.day = obj && obj.day || 0;
        this.month = obj && obj.month || 0;
        this.year = obj && obj.year || 1337;
    }
}