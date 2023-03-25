<script>
    import { pokemonApi } from "../services/api/pokemonApi";
    import PokemonInfo from "./PokemonInfo.svelte";

    export let name = ''

    const { getPokemonByName } = pokemonApi;

    let promise = getPokemonByName(name)
</script>

<div class="pokemon-card">
    {#await promise}
        ...pokemon loading
    {:then pokemon}
        <PokemonInfo {pokemon}/>
    {:catch error}
        Error: {error}
    {/await}
</div>

<style>
    .pokemon-card {
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
</style>