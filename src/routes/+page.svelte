<script lang="ts">
    import PageLoadingStub from "../components/PageLoadingStub.svelte";
    import PokemonCardList from "../components/PokemonCardList.svelte";
    import { useInitialPokemonList } from "../useCases/useInitialPokemonList";

    const { getInitialList } = useInitialPokemonList()

    let promise = getInitialList()
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
            <PageLoadingStub />
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
    
    :root {
        --main-color: black;
    }
</style>
