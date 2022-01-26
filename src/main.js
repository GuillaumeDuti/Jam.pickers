import { Address } from "./models/Address.js";
import { Event } from "./models/Event.js";
import { Location } from "./models/Location.js";
import { Position } from "./models/Position.js";
import { Time } from "./models/Time.js";

let form     = document.querySelector('form');
form.addEventListener('submit', function(e) {
    setData(e);
});

function setData(e) {
    e.preventDefault();
    let eventName   = document.querySelector('input[name=eventName]').value;
    let description = document.querySelector('textarea[name=description]').value;
    let price       = document.querySelector('input[name=price]').value;
    let categories  = document.querySelector('input[name=categories]').value;
    let country     = document.querySelector('input[name=country]').value;
    let city        = document.querySelector('input[name=city]').value;
    let street      = document.querySelector('input[name=street]').value;
    let number      = document.querySelector('input[name=number]').value;
    let postalCode  = document.querySelector('input[name=postalCode]').value;
    let latitude    = document.querySelector('input[name=latitude]').value;
    let longitude   = document.querySelector('input[name=longitude]').value;
    let date        = document.querySelector('input[name=date]').value;
    let timeStart   = document.querySelector('input[name=timeStart]').value;
    let timeEnd     = document.querySelector('input[name=timeEnd]').value;


    let address = new Address(country, city, street, number, postalCode);
    let position = new Position(longitude,latitude);
    let location = new Location(address, position);
    let time = new Time(date, timeStart, timeEnd);
    let jam = new Event(eventName, description, time, location, price, categories);
    
    window.eventName = jam;
    console.log(jam);
}


const address = new Address("Belgium", "Brussels", "Brand Whitlock", 123, 1200);
const position = new Position(150.002,-56.52);
const location = new Location(address, position);
const time = new Time();
const jam = new Event("The Bob Jam", "lorem ipsum input ...", time, location, 0, "any");

window.jam = jam;