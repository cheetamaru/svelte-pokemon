<script>
    import { pokemonApi } from "@/services/api/pokemonApi";
    import LoadingDots from "@/components/loading/LoadingDots.svelte";
    import PokemonInfo from "@/components/pokemon/PokemonInfo.svelte";

    export let name = ''

    const { getPokemonByName } = pokemonApi;

    let promise = getPokemonByName(name)

    const reloadPokemon = () => {
        promise = getPokemonByName(name)
    }
</script>

<div class="pokemon-card">
    {#await promise}
        <LoadingDots />
    {:then pokemon}
        <PokemonInfo {pokemon}/>
    {:catch error}
        <div class="pokemon-cars__error">
            <div>{name}</div>
            <div class="pokemon-cars__error-text">Error: {error}</div>
            <button on:click={reloadPokemon}>Reload</button>
        </div>
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

    .pokemon-cars__error {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .pokemon-cars__error-text {
        text-align: center;
    }
</style>