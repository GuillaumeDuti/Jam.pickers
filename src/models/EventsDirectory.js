import { Event } from "./Event.js";

export class EventsDirectory {
    #events;
    constructor(...event) {
        // this.#events = writable(new Map());
        this.#events = new Map();
        event.forEach(event => this.addEvent(event));
    }

    get Events() {
        return this.#events;
    }

    addEvent(event) {
        if(event.constructor !== Event.prototype.constructor) throw new TypeError(`${event} is not an Event object`);
        if(this.#events.has(event.eventName)) {
            console.error(`event "${event.eventName}" already setup`)
            alert(`event "${event.eventName}" already setup`)
        } else {
            this.#events.set(event.eventName, event);
            console.log(`"${event.eventName}" a bien été ajouté à la liste`);
        }
        // if(this.#events.has(event.eventName)) throw new Error('event already setup');
        // this.#events.update(event => this.#events.set(event.eventName, event))
        
    }
}