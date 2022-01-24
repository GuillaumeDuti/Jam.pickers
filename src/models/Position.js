export class Position {

    constructor(longitude, latitude) {
        this.Lng = longitude;
        this.Lat = latitude;
    };

    get Lng() {
        return this.lng;
    }
    
    set Lng(value) {
        if(isNaN(value)) throw new TypeError(`${value} is not a number`);
        if(180 < value || value < -180) throw new RangeError(`longitude ${value} does'nt exist`);
        this.lng = value;
    };

    get Lat() {
        return this.lat;
    }

    set Lat(value) {
        if(isNaN(value)) throw new TypeError(`${value} is not a number`);
        if(90 < value || value < -90) throw new RangeError(`latitude ${value} does'nt exist`);
        this.lat = value;
    };
}