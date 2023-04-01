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

    const handleClick = () => {
        promise = getPokemonList()
    }
</script>

<div>
    <h1>Svelte Virtual Scrolling Pet Project</h1>
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

