<script lang="ts">
	import { createEventDispatcher } from 'svelte';
    import { onMount } from 'svelte';
    import { VirtualScrollDomain } from '../domains/VirtualScrollDomain';

    type T = $$Generic;

    const dispatch = createEventDispatcher();

    const { defaultValues, getTotalContentHeight } = VirtualScrollDomain

    export let elementCount: number = defaultValues.elementCount
    export let elementHeight: number = defaultValues.elementHeight
    export let containerHeight: number = defaultValues.containerHeight;
    export let renderAhreadElementRowCount: number = defaultValues.renderAhreadElementRowCount
    export let elementsPerRow: number = defaultValues.elementsPerRow

    export let data: T[] = []

    $: totalContentHeight = getTotalContentHeight({
        elementCount,
        elementsPerRow,
        elementHeight
    })

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

    let lastNeedToRenderCount = -1

    const handleNewElementAppear = () => {
        const bufferHeight = elementHeight * renderAhreadElementRowCount

        const supposedToRenderZoneHeight = maxScrollTop + containerHeight + bufferHeight

        const needToRenderRowsCount = Math.ceil(supposedToRenderZoneHeight / elementHeight)
        const renderedRowsCount = Math.floor(data.length / elementsPerRow)

        if (needToRenderRowsCount > renderedRowsCount && needToRenderRowsCount != lastNeedToRenderCount) {
            const diffInRows = needToRenderRowsCount - renderedRowsCount

            lastNeedToRenderCount = needToRenderRowsCount

            computeDataToAdd(diffInRows)
        }
    }

    const handleScrollTopChange = (targetScrollTop: Element["scrollTop"]) => {
        const isRowScrolled = Math.floor((targetScrollTop - maxScrollTop) / elementHeight) > 0

        if (targetScrollTop > maxScrollTop && isRowScrolled) {
            maxScrollTop = targetScrollTop

            handleNewElementAppear()
        }
    }

    const onScroll = (e: Event) => {
        return requestAnimationFrame(() => {
            if (e.target instanceof Element) {
                scrollTop = e.target.scrollTop

                handleScrollTopChange(scrollTop)
            }
        });
    }

    $: {
        const a = [elementsPerRow]
        handleNewElementAppear()
    }

    onMount(() => {
        computeDataToAdd()
    })

    $: elementWidthInPercent = 100 / elementsPerRow
</script>

<div class="virtual-scroll__container" style="height: {containerHeight}px" on:scroll="{onScroll}">
    <div class="virtual-scroll__viewport" style="height: {totalContentHeight}px">
        <div class="virtual-scroll___visible-part" style="transform: translateY({offsetY}px)">
            {#each visibleElements as {el, index} (index)}
                <div
                    class="virtual-scroll___element"
                    style="
                        height: {elementHeight}px;
                        width: {elementWidthInPercent}%
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
        row-gap: 10px;
    }

    .virtual-scroll___element {
        display: block;
        box-sizing: border-box;
    }
</style>