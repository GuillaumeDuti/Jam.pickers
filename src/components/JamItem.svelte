<script>
    
    // let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let date = new Date().toLocaleDateString('fr-FR');
</script>

<li class="flex flex-col gap-4 p-4 bg-white border border-dashed border-gray-400 w-full shadow-xl shadow-gray-800/5">
    <header class="flex justify-between">
        <div class="jam-who">
            <h4 class="font-bold text-lg uppercase text-gray-800">Nom de la Jam</h4>
        </div>
        <div class="jam-when">
            <span class="text-lg">{date}</span>
        </div>
    </header>
    <div class="jam-what">
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, nobis iste. Obcaecati sequi consequatur esse in illo excepturi neque maxime eos distinctio dolorem! Ea, sequi consequatur nihil cumque quis officiis!
        </p>
    </div>
    <div class="jam-where">
        <p>Square Ambiorix 15, 1000 Bruxelles</p>
    </div>
</li>

<style>
    
</style>