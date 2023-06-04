<script>
    export let data;
</script>
<div class="flex flex-col items-center">
    <h1 class="text-4xl text-center my-8 uppercase">{data.name}</h1>
    <p>Type: <strong>{data.types[0].type.name}</strong> | Height: <strong>{data.height}</strong> | Weight: <strong>{data.weight}</strong></p>
    <img class="card-image" src="{data.sprites['front_default']}" alt="{data.name}" />
</div>