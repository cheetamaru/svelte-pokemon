<script lang="ts">
    import LoadingDots from "../components/LoadingDots.svelte";
import PokemonCardList from "../components/PokemonCardList.svelte";
    import { useInitialList } from "../useCases/useInitialList";

    const { getInitialList } = useInitialList()

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
            <div class="page-loading">
                <LoadingDots />
            </div>
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

    .page-loading {
        display: flex;
        height: 100vh;
        align-items: center;
        justify-content: center;
    }
</style>
