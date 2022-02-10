<script>
import { Location } from "../models/Location.js";
import { Time } from "../models/Time.js";
import { Address } from "../models/Address.js";
// import { EventsDirectory } from "../models/EventsDirectory.js";
import { Position } from "../models/Position.js";
import { Event } from "../models/Event.js";
import { directoryStore } from "../stores/directoryStore.js"


    function onSubmit(e) {
        const formData = new FormData(e.target);
        
        const data = {};
        for (let field of formData) {
        const [key, value] = field;
        data[key] = value;
        }
        processData(data);
    }
    
    function processData(data) {
        let newAdress = new Address(null, data.city, data.street, data.number, data.postalCode );
        let newPosition = new Position(0,0 );
        let newLocation = new Location(newAdress, newPosition );
        let eventDate = new Date(data.date);
        let newTime = new Time(eventDate.valueOf(), eventDate.valueOf(), eventDate.valueOf() )
        let newEvent = new Event(data.eventName, data.description, newTime, newLocation, 0, "any");

        if($directoryStore.Events.has(newEvent.eventName)) {throw new Error(`event "${newEvent.eventName}" already setup`)}
        else {
            directoryStore.update(directoryStore => {
                directoryStore.addEvent(newEvent)
                return directoryStore
            })
            // const fetchJamsDirectory = async () => {
                const url = "http://localhost:3005/directory";
                fetch(url , {
                    method: "post",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newEvent) 
                });
                // const data = await response.json();
            // }
        }
        //  $directoryStore.addEvent(newEvent);
    };
    
    // window.directory = directory;
</script>

<h2 class="mt-10 font-bold text-xl text-center" >- Add a jam -</h2>

<li class="p-4 bg-white border border-gray-600 w-full font-medium rounded-md">
    <form class="flex flex-col gap-4 " on:submit|preventDefault={onSubmit} method="GET">
                <header class="flex justify-between gap-4 flex-wrap">
                        <input required class=" placeholder:font-normal font-bold text-lg uppercase text-gray-800 border border-dashed border-gray-400 px-1 flex-1" placeholder="Jam name"  name="eventName" type="text">
                        <input required class=" placeholder:font-normal font-medium border border-dashed text-lg border-gray-400 h-full px-1 uppercase flex-1 min-w-fit" name="date" type="datetime-local">
                </header>
                <div>
                    <textarea required class=" border border-dashed text-gray-600 border-gray-400 px-1 w-full resize-x-none" rows="5" placeholder="The description here..."  name="description"></textarea>
                </div>
               
                <div class="flex justify-between gap-4 flex-wrap">
                    <input required class=" placeholder:font-normal font-medium border border-dashed border-gray-400 h-full p-1 flex-1" placeholder="Street" name="street" type="text">
                    <input required class=" placeholder:font-normal font-medium border border-dashed border-gray-400 h-full p-1 flex-1" placeholder="Number" name="number" type="number" min="0">
                    <input required class=" placeholder:font-normal font-medium border border-dashed border-gray-400 h-full p-1 flex-1" placeholder="City" name="city" type="text">
                    <input required class=" placeholder:font-normal font-medium border border-dashed border-gray-400 h-full p-1 flex-1" placeholder="Postal Code" name="postalCode" type="number" min="0">
                </div>
                
                <!-- <div>
                    <label for="latitude">latitude</label>
                    <input required value="55.056" step="0.000001" min="-90" max="90" name="latitude" type="number">
                </div>
                <div>
                    <label for="longitude">longitude</label>
                    <input required value="5.555" step="0.000001" min="-180" max="180" name="longitude" type="number">
                </div>
                
                    <h2>Date</h2>
                
                <div>
                    <label for="date">date</label>
                    <input required name="date" type="date">
                </div>
                <div>
                    <label for="timeStart">time start</label>
                    <input required name="timeStart" type="time">
                </div>
                <div>
                    <label for="timeEnd">time end</label>
                    <input required name="timeEnd" type="time">
                </div> -->
            <div class="flex gap-4">
                <input class="border bg-gray-800 text-gray-200 hover:bg-gray-600 cursor-pointer w-fit px-12 py-1" required type="submit" value="send">
                <input class="border bg-gray-200 text-gray-800 hover:bg-gray-600 cursor-pointer w-fit px-12 py-1" required type="reset" value="reset">
            </div>
        </form>
</li>

<style>
    input:focus, textarea:focus {
        outline: none;
        border: 1px solid black;
    }
</style>