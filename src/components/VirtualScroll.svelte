<script lang="ts">
	import { createEventDispatcher } from 'svelte';
    import { onMount } from 'svelte';

    const dispatch = createEventDispatcher();

    export let elementCount = 100
    export let elementHeight = 130
    export let containerHeight = 500;
    export let renderAhreadElementRowCount = 2

    export let elementsPerRow = 6

    export let data: object[] = []

    $: totalContentHeight = Math.ceil(elementCount / elementsPerRow) * elementHeight

    let scrollTop = 0
    let maxScrollTop = scrollTop

    let needToRenderRows = 0
    let lastNewRows = 0

    $: lastInRowRenderedElementIndex = Math.max(0, Math.floor(scrollTop / elementHeight) - Math.ceil(renderAhreadElementRowCount / elementsPerRow)) * elementsPerRow;

    $: visibleNodeCount = Math.min(
        elementCount - (lastInRowRenderedElementIndex || 0),
        Math.ceil(Math.ceil(containerHeight / elementHeight) * elementsPerRow) + elementsPerRow * (renderAhreadElementRowCount + 1)
    );

    $: offsetY = lastInRowRenderedElementIndex * elementHeight / elementsPerRow

    $: visibleElements = Array(visibleNodeCount || 0)
        .fill(null)
        .map((_, index) => {
            return {
                el: data[index + lastInRowRenderedElementIndex],
                index: index + lastInRowRenderedElementIndex,
            }
        })

    const computeDataToAdd = (newRows: number = 0) => {
        let elementsToAddCount = (newRows - lastNewRows) * elementsPerRow * renderAhreadElementRowCount

        if (data.length + elementsToAddCount < visibleNodeCount) {
            elementsToAddCount += visibleNodeCount
        }

        if (data.length + elementsToAddCount > elementCount) {
            const diff = elementCount - data.length
            elementsToAddCount = diff > 0 ? diff : 0
        }

        lastNewRows = newRows

        return dispatch('endReached', elementsToAddCount) 
    }

    const updateDataOnInput = () => {
        computeDataToAdd(0)
    }

    const onNewElementAppear = () => {
        const newRows = Math.ceil((maxScrollTop / elementHeight) / renderAhreadElementRowCount)

        if (newRows > needToRenderRows) {
            needToRenderRows = newRows

            computeDataToAdd(newRows)
        }
    }

    const handleNewElementAppear = (targetScrollTop: Element["scrollTop"]) => {
        if (targetScrollTop > maxScrollTop) {
            maxScrollTop = targetScrollTop
            onNewElementAppear()
        }
    }

    const onScroll = (e: Event) => {
        return requestAnimationFrame(() => {
            if (e.target instanceof Element) {
                scrollTop = e.target.scrollTop

                handleNewElementAppear(e.target.scrollTop)
            }
        });
    }

    onMount(() => {
        computeDataToAdd()
    })

    // TODO: fix bug with each key
</script>

<div class="virtual-scroll__container" style="height: {containerHeight}px" on:scroll="{onScroll}">
    <div class="virtual-scroll__viewport" style="height: {totalContentHeight}px">
        <div class="virtual-scroll___visible-part" style="transform: translateY({offsetY}px)">
            {#each visibleElements as {el, index} (index)}
                <div
                    class="virtual-scroll___element"
                    style="
                        height: {elementHeight}px;
                        width: {100 / elementsPerRow}%
                    "
                >
                    <slot {el} />
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .virtual-scroll__container {
        overflow: auto;
        background-color: blanchedalmond;
        width: 100%;
    }

    .virtual-scroll__viewport {
        overflow: hidden;
        will-change: transform;
        position: relative;
    }

    .virtual-scroll___visible-part {
        will-change: transform;
        display: flex;
        flex-wrap: wrap;
    }

    .virtual-scroll___element {
        display: block;
        box-sizing: border-box;
        border: 1px solid blueviolet;
    }
</style>