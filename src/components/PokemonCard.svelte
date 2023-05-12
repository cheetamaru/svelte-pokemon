<script>
    import { pokemonApi } from "@/services/api/pokemonApi";
    import LoadingDots from "@/components/LoadingDots.svelte";
    import PokemonInfo from "@/components/PokemonInfo.svelte";

    export let name = ''

    const { getPokemonByName } = pokemonApi;

    let promise = getPokemonByName(name)
</script>

<div class="pokemon-card">
    {#await promise}
        <LoadingDots />
    {:then pokemon}
        <PokemonInfo {pokemon}/>
    {:catch error}
        Error: {error}
    {/await}
</div>

<style>
    .pokemon-card {
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 5px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        height: inherit;
    }
</style>