<script>
    
    import Welcome from "../components/Welcome.svelte";
    import JamsList from "../components/JamsList.svelte";
    import Navbar from "../components/Navbar.svelte";
    import SearchBar from "../components/SearchBar.svelte";
    let city;
</script>

<div class="container flex flex-col mx-auto max-w-4xl px-2 min-h-screen font-mono">
    <div class="pb-10 mt-40 bg-gray-50 z-10">
        <Navbar/>
        <SearchBar onChange={newValue => city = newValue} />
    </div>
    <!-- {#if city} -->
        <!-- <div>
            <Welcome/>
        </div>
    {:else} -->
        <div>
            <JamsList city="{city}" />
        </div>
    <!-- {/if} -->
</div>

