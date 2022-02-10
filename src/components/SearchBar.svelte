<script>
import { directoryStore } from "../stores/directoryStore";


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

    // $: cities = getCities();
    // function getCities() {
        // onMount(async () => {
            
            // })
    // const fetchJamsDirectory = async () => {
    //     const url = "http://localhost:3001/directory";
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     // dataJson.push(data);
    //     // for(let jam of data) {
    //     //     changeToEventObject(jam)
    //     // }
    //     checkCities(data)
    // }
    // fetchJamsDirectory(); 

    let cities = [];
    function checkCities(json) {
        for(let [key, value] of json) {
                    if(!cities.includes(value.location.address.city)) {cities.push(value.location.address.city)}
                    else {
                        console.log("deja la");
                    }
        };
    }

    $: checkCities($directoryStore.Events);

    // $: console.log($directoryStore.Events);

    // $: cities = Array.from([...$directoryStore.Events.values()]);
    // $: sortCities = cities;

    // export welcome text option 
    export let onChange;
    let city;
    $: onChange(city);
    // function toggle() {
    //     welcomeText = !welcomeText;
    // }
    function searchJamInCity(selectedCity) {
        city = selectedCity;
    }

</script>


<form class="flex justify-center" method="GET" on:submit|preventDefault={onSubmit}>

    <select class="border border-gray-600 rounded-l-md p-2 hover:border-black checked:border-black outline-none" name="city" id="cities__select">
        <option class="text-gray-500">Pick our city</option>
        <option disabled value="">-------------</option>
        <!-- <optgroup label="Cities"> -->
            {#each cities as city}
            <option value="{city}">{city}</option>
            {/each}
        <!-- </optgroup> -->
    </select>
    <!-- <label for="cities">Pick your city</label> -->
    <!-- {#each cities as city}
        <div class="px-4">
            <input class="appearance-none w-2 h-2 border border-black rounded-none checked:bg-black" type="radio" value="{city}" name="city">
            <label for="city">{city}</label>
        </div>
    {/each} -->
    <button class="border border-gray-600 rounded-r-md py-1 px-3 bg-gray-200 hover:border-black">search</button>
    <!-- <button class="border border-gray-600 py-1 px-3 bg-gray-200 hover:border-black" on:click={toggle}>search</button> -->
</form>