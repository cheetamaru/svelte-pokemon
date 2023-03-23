<script lang="ts">
    import type { NamedAPIResourceList, NamedAPIResource } from "pokenode-ts";
    import PokemonCard from "../components/PokemonCard.svelte";
    import VirtualScroll from "../components/VirtualScroll.svelte";

    import { pokemonApi } from "../services/api/pokemonApi";

    const { getList } = pokemonApi;

    export let list: NamedAPIResourceList

    $: total = list.count

    let data: NamedAPIResource[] = [...list.results]

    const handleEndReached = async (event: CustomEvent<number>) => {
        const newElsNeeded = event.detail

        const newData = await getList(data.length, newElsNeeded)

        data = [...data, ...newData.results]
    }
</script>

<div>Total: {total}</div>
<div>data: {data.length}</div>
<div class="pokemon-card-list">
    <div class="pokemon-card-list__main">
        <VirtualScroll {data} bind:elementCount={total} on:endReached={handleEndReached} let:el>
            <PokemonCard name="{el?.name}"/>
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
