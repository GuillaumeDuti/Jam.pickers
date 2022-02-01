import { Event } from "./Event.js";

export class EventDirectory {
    #events;
    constructor(...event) {
        this.#events = new Map();
        event.forEach(event => this.addEvent(event));
    }

    addEvent(event) {
        if(event.constructor !== Event.prototype.constructor) throw new TypeError(`${event} is not an Event object`);
        // if(this.#events.has(event.id)) throw new RangeError('event already setup')
        this.#events.set(event.eventName, event);
    }
}