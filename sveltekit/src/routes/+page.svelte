<script>
    import PokemanCard from "../components/pokemanCard.svelte"

    export let data
    let pokemon = data.pokemon

    let searchTerm = "";
    let filteredPokemon = pokemon
    $: {
        if (searchTerm) {
            filteredPokemon = pokemon.filter(pokeman => pokeman.name.toLowerCase().includes(searchTerm.toLowerCase()))
        } else {
            filteredPokemon = [... pokemon]
        }
    }
</script>

<svelte:head>
    <title>Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Pokedex</h1>

<input class="w-full rounded-md text-lg p-4 border-2 border-gray-200" type="text" bind:value={searchTerm}
       placeholder="Search Pokemon">

<div class="py-4 grid gap-4 md:grid-cols-3 grid-cols-1">
    {#each filteredPokemon as pokeman}
        <PokemanCard pokeman={pokeman}/>
    {/each}
</div>