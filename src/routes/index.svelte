<script>
    
    import Welcome from "../components/Welcome.svelte";
    import JamsList from "../components/JamsList.svelte";
    import Navbar from "../components/Navbar.svelte";
</script>

<div class="container flex flex-col mx-auto max-w-xl px-2">
    <div class="sticky inset-0 py-20">
        <Navbar/>
        <Welcome/>
    </div>
    <JamsList/>
</div>
<!-- 
<h1>Welcome to Jampickers</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
