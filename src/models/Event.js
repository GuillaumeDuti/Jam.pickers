export class Event {

    eventName;
    description;
    date;
    address;
    #price;
    categories;
    
    constructor(eventName, description, date, address, price = 0, categories) {
        this.eventName      = eventName;
        this.description    = description;
        this.date           = date;
        this.address        = address; 
        this.Price          = price; 
        this.categories     = categories;
    }

    get Price() {
        return this.#price;
    }

    set Price(value) {
        if(isNaN(value)) throw new TypeError(`${value} is not a number`);
        if(value < 0) throw new RangeError(`${value} must be a positive number`)
        this.#price = value;
    }
}