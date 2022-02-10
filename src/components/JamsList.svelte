<script>
    import { directoryStore } from "../stores/directoryStore.js";
    import AddJamForm from "./AddJamForm.svelte";
    import JamItem from "./JamItem.svelte";

    $: jamList = $directoryStore.Events;
    $: console.log(jamList)

    export let city;
    
</script>

<ul class="flex flex-col gap-6 relative bg-gray-50 pb-8">
    {#each [...jamList] as [key, value]}
        {#if value.location.address.city === city}
            <!-- <div transition:fly={{ y: 200, duration: 500 }}> -->
                <JamItem data={value}/>
            <!-- </div> -->
        {/if}
    {/each}
    <AddJamForm/>
</ul>