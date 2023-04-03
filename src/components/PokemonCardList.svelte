<script lang="ts">
    import type { NamedAPIResourceList, NamedAPIResource } from "pokenode-ts";
    import PokemonCard from "../components/PokemonCard.svelte";
    import VirtualScroll from "../components/VirtualScroll.svelte";
    import debounce from "lodash.debounce"

    import { pokemonApi } from "../services/api/pokemonApi";
    import LoadingDots from "./LoadingDots.svelte";

    const { getList } = pokemonApi;

    export let list: NamedAPIResourceList

    $: total = list.count

    let data: NamedAPIResource[] = [...list.results]

    let elementPool = 0

    const getWithElPool = async () => {
        if (elementPool === 0) {
            return
        }

        const newData = getList(data.length, elementPool)

        elementPool = 0

        data = [...data, ...(await newData).results]
    }

    // const debounced = debounce(getWithElPool, 100)

    const handleEndReached = (event: CustomEvent<number>) => {
        const newElsNeeded = event.detail

        elementPool += newElsNeeded

        getWithElPool()
    }

    const debouncedHandleEnd = debounce(handleEndReached, 100)

    let elementsPerRow = 4

    // TODO: fix bug when need to render rows does not work correctly
    // on elementsPerRow change

    let box: HTMLElement

    $: offsetTopOfScrollContainer = box?.offsetTop || 0

    $: containerHeight = window.innerHeight - offsetTopOfScrollContainer - 1

    let elementHeight = 150

    const forbidInputFromKeyboard = (e: Event) => e.preventDefault()
</script>
<div>
    Elements per row: <input type="number" min="1" max="15" bind:value={elementsPerRow} on:keydown={forbidInputFromKeyboard}> |
    Element height: <input type="number" min="150" max="500" step="10" bind:value={elementHeight} on:keydown={forbidInputFromKeyboard}>
</div>
<div class="pokemon-card-list" bind:this={box}>
    <div class="pokemon-card-list__main">
        <VirtualScroll
            {data}
            {elementsPerRow}
            {containerHeight}
            {elementHeight}
            bind:elementCount={total}
            on:endReached={debouncedHandleEnd}
            let:el
        >   
            {#if !el}
                <div class="loading-dots">
                    <LoadingDots />
                </div>
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

.loading-dots {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
}
</style>
