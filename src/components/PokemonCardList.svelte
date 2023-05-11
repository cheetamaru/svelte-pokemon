<script lang="ts">
    import type { NamedAPIResourceList, NamedAPIResource } from "pokenode-ts";
    import debounce from "lodash.debounce"
    import { pokemonApi } from "../services/api/pokemonApi";
    import PokemonCard from "../components/PokemonCard.svelte";
    import VirtualScroll from "../components/VirtualScroll.svelte";
    import LoadingDots from "./LoadingDots.svelte";

    import { MainPageDomain } from "../domains/MainPageDomain";
    import { PokemonListDomain } from "../domains/PokemonListDomain";
    import { usePokemonListInputs } from "../useCases/usePokemonListInputs";

    const { mainTitle } = MainPageDomain;
    const { elementHeightSettings, elementsPerRowSettings, getValueInRange } = PokemonListDomain

    const { getPokemonList } = pokemonApi;

    const { 
        getInitialElementPerRow,
        getInitialElementHeight,
        onElementPerRowInput,
        onElementHeightInput,
     } = usePokemonListInputs()

    export let list: NamedAPIResourceList

    $: total = list.count

    let data: NamedAPIResource[] = [...list.results]

    let elementPool = 0

    const getWithElPool = async () => {
        if (elementPool === 0) {
            return
        }

        const newData = getPokemonList(data.length, elementPool)

        elementPool = 0

        data = [...data, ...(await newData).results]
    }

    const handleEndReached = (event: CustomEvent<number>) => {
        const newElsNeeded = event.detail

        elementPool += newElsNeeded

        getWithElPool()
    }

    const debouncedHandleEnd = debounce(handleEndReached, 100)

    let elementsPerRow = getInitialElementPerRow()
    let elementHeight = getInitialElementHeight()

    let box: HTMLElement

    $: offsetTopOfScrollContainer = box?.offsetTop || 0
    $: containerHeight = window.innerHeight - offsetTopOfScrollContainer

    const checkElementsPerRow = (val: number) => {
        const {min, max} = elementsPerRowSettings

        elementsPerRow = getValueInRange({
            val, min, max
        })
    }

    const checkElementHeight = (val: number) => {
        const {min, max} = elementHeightSettings

        elementHeight = getValueInRange({
            val, min, max
        })
    }

    $: checkElementsPerRow(elementsPerRow)
    $: checkElementHeight(elementHeight)
</script>

<div class="list-header">
    <div class="list-header__title">
        {mainTitle}
    </div>
    <div class="list-header__actions">
        <div>
            Elements per row: <input
                type="number"
                min={elementsPerRowSettings.min}
                max={elementsPerRowSettings.max}
                bind:value={elementsPerRow}
                on:input={onElementPerRowInput}
            >
        </div>
        <div>
            Element height: <input
                type="number"
                min={elementHeightSettings.min}
                max={elementHeightSettings.max}
                step={elementHeightSettings.step}
                bind:value={elementHeight}
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
    border-bottom: 3px solid var(--main-color);
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
