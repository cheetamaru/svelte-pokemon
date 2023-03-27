<script lang="ts">
    import type { NamedAPIResourceList, NamedAPIResource } from "pokenode-ts";
    import PokemonCard from "../components/PokemonCard.svelte";
    import VirtualScroll from "../components/VirtualScroll.svelte";

    import { pokemonApi } from "../services/api/pokemonApi";

    const { getList } = pokemonApi;

    export let list: NamedAPIResourceList

    $: total = list.count

    let data: NamedAPIResource[] = [...list.results]

    let elementPool = 0

    const getWithElPool = async () => {
        if (elementPool === 0) {
            return
        }

        const newData = await getList(data.length, elementPool)

        data = [...data, ...newData.results]

        elementPool = 0
    }

    const handleEndReached = async (event: CustomEvent<number>) => {
        const newElsNeeded = event.detail

        elementPool += newElsNeeded

        getWithElPool()
    }

    let elementsPerRow = 1

    // TODO: fix bug when need to render rows does not work correctly
    // on elementsPerRow change
</script>

<div>Total: {total}</div>
<div>data: {data.length}</div>
<div>
    Elements per row: <input type="number" min="1" max="30" bind:value={elementsPerRow}>
</div>
<div class="pokemon-card-list">
    <div class="pokemon-card-list__main">
        <VirtualScroll
            {data}
            {elementsPerRow}
            bind:elementCount={total}
            on:endReached={handleEndReached}
            let:el
        >
            {#if !el}
                Pokemon is loading
            {:else}
                <PokemonCard name="{el?.name}"/>
            {/if}
        </VirtualScroll>
    </div>
</div>


<style>
.pokemon-card-list {
    display: flex;
    justify-content: center;
}

.pokemon-card-list__main {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: left;;
    width: 100%;
}
</style>
