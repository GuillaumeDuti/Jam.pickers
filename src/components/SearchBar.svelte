<script>
    function onSubmit(e) {
        const formData = new FormData(e.target);
        
        const data = {};
        // for (let field of formData) {
        // const [key, value] = field;
        // data[key] = value;
        // }
    }
    export let onChange;
    let welcomeText = true;
    $: onChange(welcomeText);
    function toggle() {
        welcomeText = !welcomeText;
    }

</script>


<form class="flex justify-center gap-4" on:submit|preventDefault={onSubmit}>
    <select class="border block p-1" name="citySelector" id="citySelector">
        <option value="Brussels">Brussels</option>
    </select>
    <button class="border py-1 px-3 rounded-full" on:click={toggle}>search</button>
</form>