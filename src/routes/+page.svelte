<script lang="ts">
    import PokemonCardList from "../components/PokemonCardList.svelte";
    import { pokemonApi } from "../services/api/pokemonApi";

    const { getList } = pokemonApi;

    const getPokemonList = () => {
        return getList(offset, limit)
    }

    let offset = 0
    let limit = 30

    let promise = getPokemonList()
</script>

<svelte:head>
	<title>Svelte Virtual Scrolling</title>
</svelte:head>

<div>
    <main>
        {#await promise}
            ...Loading
        {:then list}
            <PokemonCardList {list} />
        {:catch error}
            Error: {error}
        {/await}
    </main>
</div>

<style>
    :global(body) {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
    }
</style>
