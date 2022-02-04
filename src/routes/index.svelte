<script>
    
    import Welcome from "../components/Welcome.svelte";
    import JamsList from "../components/JamsList.svelte";
    import Navbar from "../components/Navbar.svelte";
    import SearchBar from "../components/SearchBar.svelte";
    import { fade, fly } from 'svelte/transition'
    let welcomeText;
    
</script>

<div class="container flex flex-col mx-auto max-w-4xl px-2 min-h-screen">
    <div class="sticky inset-0 pb-10 mt-40 bg-gray-50 z-10">
        <Navbar/>
        <SearchBar onChange={newValue => welcomeText = newValue} />
    </div>
    {#if welcomeText}
        <div>
            <Welcome/>
        </div>
    {:else}
        <div>
            <JamsList />
        </div>
    {/if}
</div>
<!-- 
<h1>Welcome to Jampickers</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
