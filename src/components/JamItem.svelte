<script>
    // import {Icon} from 'svelte-awesome';
    // import Icon from 'svelte-awesome/components/Icon.svelte';
    // import { mapMarker } from 'svelte-awesome/icons';
    import { fly, fade } from "svelte/transition";
    export let data;
    let isActive = false;
    function toggle() {
        isActive = !isActive
    }
</script>

<li on:click="{toggle}" in:fly={{ y: 200, duration: 100 }} class="flex flex-wrap gap-4 p-4 basis-1/2 bg-white border border-gray-600 w-full rounded-md cursor-pointer font-normal">
    <div class="flex gap-10 w-full align-baseline">
        <div class="jam-when">
            <span class="text">{new Date(data.date.date).toLocaleDateString()}</span>
        </div>
        <div class="jam-who">
            <h4 class="text-gray-800">{data.eventName}</h4>
        </div>
        <div class="jam-city ml-auto">
            <h4 class="uppercase text-gray-800"> {data.location.address.city}</h4>
        </div>
    </div>
    {#if isActive}
        <div in:fade={{duration: 300 }} class="info-supp w-full flex flex-col gap-4">
            <div class="jam-what">
                <p class="font-normal text-gray-600">
                    {data.description}
                </p>
            </div>
            <div class="jam-where flex gap-4 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
                <p>{data.location.address.street} {data.location.address.number}, {data.location.address.postalCode}</p>
            </div>
        </div>
    {/if}
</li>
<!-- <li on:click="{toggle}" in:fly={{ y: 200, duration: 100 }} class="flex flex-col gap-4 p-4 rounded-md bg-white border border-gray-600 w-full cursor-default font-medium {isActive === true ? "active" : "desactive"}">
    <header class="flex justify-between">
        <div class="jam-who">
            <h4 class="font-bold text-lg uppercase">{data.eventName}</h4>
        </div>
        <div class="jam-when">
            <span class="text-lg">{new Date(data.date.date).toLocaleDateString()}</span>
        </div>
    </header>
    <div class="jam-what">
        <p class="font-normal text-gray-600">
            {data.description}
        </p>
    </div>
    <div class="jam-where flex gap-4 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
        </svg>
        <p>{data.location.address.street} {data.location.address.number}, {data.location.address.postalCode} {data.location.address.city}</p>
    </div>
</li> -->
