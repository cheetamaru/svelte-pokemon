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
    {/await}
</div>

<style>
    .pokemon-card {
        border: 1px solid black;
        width: 300px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>