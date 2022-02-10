<script>
import { onMount } from "svelte";

// import { directoryStore } from "../stores/directoryStore";


    function onSubmit(e) {
        const formData = new FormData(e.target);
        
        const data = {};
        for (let field of formData) {
        const [key, value] = field;
        data[key] = value;
        }
        console.log(data);
        searchJamInCity(data.city)
    }

    let cities = [];
    function checkCities(json) {
        json.forEach(event => {
            if(!cities.includes(event.location.address.city)) {
                cities = [...cities,event.location.address.city ]
            }
        })
    }
    onMount(async () => {
        const url = "https://glacial-stream-03390.herokuapp.com/directory";
        const response = await fetch(url);
        const data = await response.json();
        checkCities(data)
    })

    export let onChange;
    let city;
    $: onChange(city);
    function searchJamInCity(selectedCity) {
        city = selectedCity;
    }

</script>


<form class="flex justify-center" method="GET" on:submit|preventDefault={onSubmit}>

    <select class="border border-gray-600 rounded-l-md p-2 hover:border-black checked:border-black focus:border-black" name="city" id="cities__select">
        <option value="" class="text-gray-500">Pick our city</option>
        <option disabled value="">-------------</option>
        {#each cities as city}
            <option value="{city}">{city}</option>
        {/each}
    </select>
    <!-- <label for="cities">Pick your city</label> -->
    <!-- {#each cities as city}
        <div class="px-4">
            <input class="appearance-none w-2 h-2 border border-black rounded-none checked:bg-black" type="radio" value="{city}" name="city">
            <label for="city">{city}</label>
        </div>
    {/each} -->
    <button type="submit" class="border border-gray-600 rounded-r-md py-1 px-3 bg-gray-200 hover:border-black">search</button>
    <!-- <button class="border border-gray-600 py-1 px-3 bg-gray-200 hover:border-black" on:click={toggle}>search</button> -->
</form>