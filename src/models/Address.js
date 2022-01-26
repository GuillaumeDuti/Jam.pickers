export class Address {

    country;
    city;
    street;
    number;
    postalCode;
    
    constructor(country, city, street, number, postalCode) {
        this.country    = country;
        this.city       = city;
        this.street     = street;
        this.number     = number;
        this.postalCode = postalCode;
    }
}