import { Address } from "./models/Address.js";
import { Event } from "./models/Event.js";
import { Location } from "./models/Location.js";
import { Position } from "./models/Position.js";
import { Time } from "./models/Time.js";

const address = new Address("Belgium", "Brussels", "Brand Whitlock", 123, 1200);
const position = new Position(150.002,-56.52);
const location = new Location(address, position);
const time = new Time();
const jam = new Event("The Bob Jam", "lorem ipsum input ...", time, location, "plein de mots clefs", 0, "any");

window.jam = jam;