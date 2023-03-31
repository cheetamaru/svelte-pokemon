<script lang="ts">
	import { createEventDispatcher } from 'svelte';
    import { onMount } from 'svelte';
    import debounce from "lodash.debounce"

    const dispatch = createEventDispatcher();

    export let elementCount = 100
    export let elementHeight = 130
    export let containerHeight = 700;
    export let renderAhreadElementRowCount = 2

    export let elementsPerRow = 6

    export let data: object[] = []

    $: totalContentHeight = Math.ceil(elementCount / elementsPerRow) * elementHeight

    let scrollTop = 0
    let maxScrollTop = scrollTop

    $: lastInRowRenderedElementIndex = Math.max(0, Math.floor(scrollTop / elementHeight) - Math.ceil(renderAhreadElementRowCount / elementsPerRow)) * elementsPerRow;

    $: visibleNodeCount = Math.min(
        elementCount - (lastInRowRenderedElementIndex || 0),
        Math.ceil(Math.ceil(containerHeight / elementHeight) * elementsPerRow) + elementsPerRow * (renderAhreadElementRowCount + 1)
    );

    $: offsetY = lastInRowRenderedElementIndex * elementHeight / elementsPerRow

    $: visibleElements = Array(visibleNodeCount < 0 ? 0 : visibleNodeCount)
        .fill(null)
        .map((_, index) => {
            return {
                el: data[index + lastInRowRenderedElementIndex],
                index: index + lastInRowRenderedElementIndex,
            }
        })

    const computeDataToAdd = (newRows: number = 0) => {
        let elementsToAddCount = newRows * elementsPerRow

        if (data.length + elementsToAddCount < visibleNodeCount) {
            elementsToAddCount += visibleNodeCount
        }

        if (data.length + elementsToAddCount > elementCount) {
            const diff = elementCount - data.length
            elementsToAddCount = diff > 0 ? diff : 0
        }

        return dispatch('endReached', elementsToAddCount) 
    }

    const updateDataOnInput = () => {
        computeDataToAdd(0)
    }

    let lastNeedToRenderCount = -1

    const onNewElementAppear = () => {
        const bufferHeight = elementHeight * renderAhreadElementRowCount

        const supposeToRenderZoneHeight = maxScrollTop + containerHeight + bufferHeight

        const needToRenderRowsCount = Math.ceil(supposeToRenderZoneHeight / elementHeight)
        const renderedRowsCount = Math.floor(data.length / elementsPerRow)

        if (needToRenderRowsCount > renderedRowsCount && needToRenderRowsCount != lastNeedToRenderCount) {
            const diffInRows = needToRenderRowsCount - renderedRowsCount

            lastNeedToRenderCount = needToRenderRowsCount

            computeDataToAdd(diffInRows)
        }
    }

    const handleNewElementAppear = (targetScrollTop: Element["scrollTop"]) => {
        const isRowScrolled = Math.floor((targetScrollTop - maxScrollTop) / elementHeight) > 0

        if (targetScrollTop > maxScrollTop && isRowScrolled) {
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

    $: {
        const a = [elementsPerRow]
        updateDataOnInput()
    }

    onMount(() => {
        computeDataToAdd()
    })
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