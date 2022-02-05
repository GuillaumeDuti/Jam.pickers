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

// generation 3 event sans json-server 
    const address = new Address(undefined, "Brussels", "Square Ambiorix", "22", "1000");
    const position = new Position(null,null);
    const location = new Location(address, position);
    const time = new Time(new Date(1645787460000), new Date(1645787460000), new Date(1645787460000));
    const newJam = new Event("L'ambiorix Jam", "Continually strategize best-of-breed ideas through premium catalysts for change. Proactively utilize next-generation information after premium potentialities.", time, location, 0, "All categories");
    const newJam2 = new Event("Folklore Stage", "Proactively utilize next-generation information after premium potentialities. Phosfluorescently morph orthogonal infrastructures after empowered customer service. Dramatically.", time, location, 0, "All categories");
    directoryStore.update(directoryStore => {
        directoryStore.addEvent(newJam);
        directoryStore.addEvent(newJam2);
        return directoryStore
    })
