<script>
    import { directoryStore } from "../stores/directoryStore.js";
    import AddJamForm from "./AddJamForm.svelte";
    import JamItem from "./JamItem.svelte";
    $: jamList = $directoryStore.Events;
    // let jamList;
    $: console.log(jamList)
    // directoryStore.subscribe(value => {
	// 	jamList = value;
	// });
</script>

<ul class="flex flex-col gap-6 relative bg-gray-50 pb-8">
    {#each [...jamList] as [key, value]}
        <JamItem data={value}/>
    {/each}
    <!-- {jamList.get('The Bob Jam')} -->
    <!-- <JamItem/>
    <JamItem/>
    <JamItem/>
    <JamItem/>
    <JamItem/> -->
    <AddJamForm/>
</ul>