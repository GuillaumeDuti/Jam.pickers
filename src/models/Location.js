export class Location {
    
    address;
    position;

    constructor(address, position) {
        this.address    = parseInt(address);
        this.position   = parseInt(position);
    }

    get Address() {
        return this.address;
    }

    get Position() {
        return this.position;
    }
}