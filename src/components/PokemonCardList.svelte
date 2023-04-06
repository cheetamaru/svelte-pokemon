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

    const handleEndReached = (event: CustomEvent<number>) => {
        const newElsNeeded = event.detail

        elementPool += newElsNeeded

        getWithElPool()
    }

    const debouncedHandleEnd = debounce(handleEndReached, 100)

    const elementsPerRowStorageKey = "elementsPerRow"
    const elementsHeightStorageKey = "elementHeight"

    let elementsPerRow = localStorage.getItem(elementsPerRowStorageKey) || 4
    let elementHeight = localStorage.getItem(elementsHeightStorageKey) || 150

    // TODO: fix bug when need to render rows does not work correctly
    // on elementsPerRow change

    let box: HTMLElement

    $: offsetTopOfScrollContainer = box?.offsetTop || 0

    $: containerHeight = window.innerHeight - offsetTopOfScrollContainer - 1

    const forbidInputFromKeyboard = (e: Event) => e.preventDefault()

    const onElementPerRowInput = (e: Event) => {
        localStorage.setItem(elementsPerRowStorageKey, (e.target as HTMLInputElement)?.value)
    }

    const onElementHeightInput = (e: Event) => {
        localStorage.setItem(elementsHeightStorageKey, (e.target as HTMLInputElement)?.value)
    }
</script>
<div class="list-header">
    <div class="list-header__title">
        Pokemon List with Virtual Scrolling
    </div>
    <div class="list-header__actions">
        <div>
            Elements per row: <input
                type="number"
                min="1"
                max="15"
                bind:value={elementsPerRow}
                on:keydown={forbidInputFromKeyboard}
                on:input={onElementPerRowInput}
            >
        </div>
        <div>
            Element height: <input
                type="number"
                min="150"
                max="500"
                step="10"
                bind:value={elementHeight}
                on:keydown={forbidInputFromKeyboard}
                on:input={onElementHeightInput}
            >
        </div>
    </div>

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
.list-header {
    display: flex;
    border-bottom: 3px solid black;
    justify-content: space-between;
    padding: 10px;
    height: auto;
}

.list-header__actions {
    display: flex;
    column-gap: 15px;
}

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
