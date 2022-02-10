import { writable } from 'svelte/store';
import { Address } from "../models/Address.js";
import { Event } from "../models/Event.js";
import { Location } from "../models/Location.js";
import { Position } from "../models/Position.js";
import { Time } from "../models/Time.js";
import { EventsDirectory } from "../models/EventsDirectory.js";
// import { onMount } from 'svelte';

export const directoryStore = writable(new EventsDirectory())
// Fetch data already on the server
// onMount(async () => {
    const fetchJamsDirectory = async () => {
        const url = "http://localhost:3005/directory";
        const response = await fetch(url);
        const data = await response.json();
        // dataJson.push(data);
        for(let jam of data) {
            changeToEventObject(jam)
        }
    }
    fetchJamsDirectory();
// })

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
    const address2 = new Address(undefined, "Paris", "Square du 13ieme", "26", "92000");
    const address3 = new Address(undefined, "Anvers", "Square vanRickenStraat", "22", "6000");
    const position = new Position(null,null);
    const location = new Location(address, position);
    const location2 = new Location(address2, position);
    const location3 = new Location(address3, position);
    const time = new Time(new Date(1645787460000), new Date(1645787460000), new Date(1645787460000));
    const newJam = new Event("L'ambiorix Jam", "Continually strategize best-of-breed ideas through premium catalysts for change. Proactively utilize next-generation information after premium potentialities.", time, location, 0, "All categories");
    const newJam2 = new Event("Folklore Stage", "Proactively utilize next-generation information after premium potentialities. Phosfluorescently morph orthogonal infrastructures after empowered customer service. Dramatically.", time, location, 0, "All categories");
    const newJam3 = new Event("Du bruit dans ta vie", "Proactively utilize next-generation information after premium potentialities. Phosfluorescently morph orthogonal infrastructures after empowered customer service. Dramatically.", time, location2, 0, "All categories");
    const newJam4 = new Event("De free muziek festival", "Proactively utilize next-generation information after premium potentialities. Phosfluorescently morph orthogonal infrastructures after empowered customer service. Dramatically.", time, location3, 0, "All categories");
    directoryStore.update(directoryStore => {
        directoryStore.addEvent(newJam);
        directoryStore.addEvent(newJam2);
        directoryStore.addEvent(newJam3);
        directoryStore.addEvent(newJam4);
        return directoryStore
    })
