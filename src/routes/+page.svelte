<script>
    import { pokemonApi } from "../services/api/pokemonApi";

    const { getList } = pokemonApi;

    const getPokemonList = () => {
        return getList(offset, limit)
    }

    let offset = 0
    let limit = 10

    let promise = getPokemonList()

    const handleClick = () => {
        promise = getPokemonList()
    }
</script>

<div>
    <h1>Svelte Pokemon Pet Project</h1>
    <main>
        <div>
            <p>List params:</p>
            <input type="number" name="offset" bind:value={offset}>
            <input type="number" name="limit" bind:value={limit}>
            <button on:click={handleClick}>Search</button>
        </div>
        {#await promise}
            ...Loading
        {:then list}
            {#each list.results as pokemon}
                <div>Name: {pokemon.name}</div>
            {/each}
        {:catch error}
            Error: {error}
        {/await}
    </main>
</div>
