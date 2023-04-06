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
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap" rel="stylesheet">
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
       font-family: 'Poppins', sans-serif;
    }
</style>
