export class Weather{
    _id: number;
    mountain_id: number;
    date: Date;
    temperature_min: number;
    temperature_max: number;
    wind: number;
    outlook: string;

    constructor(obj?:any){
        this._id = obj && obj._id || null;
        this.mountain_id = obj && obj.mountain_id || null;
        this.date = obj && obj.date || null;
        this.temperature_min = obj && obj.temperature_min || null;
        this.temperature_max = obj && obj.temperature_max || null;
        this.wind = obj && obj.wind || null;
        this.outlook = obj && obj.outlook || null;
    }
}