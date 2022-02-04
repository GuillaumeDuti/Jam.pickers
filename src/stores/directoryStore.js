import { writable } from 'svelte/store';
import { Address } from "../models/Address.js";
import { Event } from "../models/Event.js";
import { Location } from "../models/Location.js";
import { Position } from "../models/Position.js";
import { Time } from "../models/Time.js";
import { EventsDirectory } from "../models/EventsDirectory.js";

export const directoryStore = writable(new EventsDirectory())
// Fetch data already on the server
const fetchJamsDirectory = async () => {
    const url = "http://localhost:3001/directory";
    const response = await fetch(url);
    const data = await response.json();
    // dataJson.push(data);
    for(let jam of data) {
        changeToEventObject(jam)
    }
}

fetchJamsDirectory();

// const eventObjectList = [];
function changeToEventObject(jam) {
    const address = new Address(undefined, jam.location.address.city, jam.location.address.street, jam.location.address.number, jam.location.address.postalCode);
    const position = new Position(0,0);
    const location = new Location(address, position);
    const time = new Time(jam.date.date, jam.date.timeStart, jam.date.timeEnd);
    const newJam = new Event(jam.eventName, jam.description, time, location, 0, "All categories");
    directoryStore.update(directoryStore => {
        directoryStore.addEvent(newJam)
        return directoryStore
    })
}