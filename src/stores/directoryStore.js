import { writable } from 'svelte/store';
import { Address } from "../models/Address.js";
import { Event } from "../models/Event.js";
import { Location } from "../models/Location.js";
import { Position } from "../models/Position.js";
import { Time } from "../models/Time.js";
import { EventsDirectory } from "../models/EventsDirectory.js";

// const fetchJamsDirectory = async () => {
//     const url = "http://localhost:3001/directory";
//     const response = await fetch(url);
//     const data = await response.json();
// }

const address = new Address("Belgium", "Brussels", "Brand Whitlock", 123, 1200);
const position = new Position(150.002,-56.52);
const location = new Location(address, position);
const time = new Time();
const jam = new Event("The first Jam", "lorem ipsum input ...", time, location, 0, "any");
const jam2 = new Event("The second Jam", "lorem ipsum input ...", time, location, 0, "any");
// const newEventsDirectory = new EventsDirectory(jam, jam2, jam)
// export const directoryStore = writable(newEventsDirectory);
export const directoryStore = writable(new EventsDirectory(jam, jam2));
// console.log(jam);
