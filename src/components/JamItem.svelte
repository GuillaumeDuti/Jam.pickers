<script>
    export let data;
    let date = new Date().toLocaleDateString('fr-FR');
    // let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    // let date = new Date().toLocaleDateString('fr-FR', options);
</script>

<!-- <li class="flex flex-col gap-4 p-4 bg-white border border-dashed border-gray-400 w-full hover:border-solid hover:shadow-gray-800/20 hover:shadow-md transition duration-200 cursor-pointer font-medium"> -->
<li class="flex flex-col gap-4 p-4 bg-white border border-dashed border-gray-400 w-full cursor-default font-medium">
    <header class="flex justify-between">
        <div class="jam-who">
            <h4 class="font-bold text-lg uppercase text-gray-800">{data.eventName}</h4>
        </div>
        <div class="jam-when">
            <span class="text-lg">{data.date.date.toLocaleDateString()}</span>
        </div>
    </header>
    <div class="jam-what">
        <p class="font-normal text-gray-600">
            {data.description}
        </p>
    </div>
    <div class="jam-where">
        <p>{data.location.address.street} {data.location.address.number}, {data.location.address.postalCode} {data.location.address.city}</p>
    </div>
</li>

<style>
    
</style>