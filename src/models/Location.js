export class Location {
    constructor(address, position) {
        this.address    = address;
        this.position   = position;
    }

    get Address() {
        return this.address;
    }

    get Position() {
        return this.position;
    }
}