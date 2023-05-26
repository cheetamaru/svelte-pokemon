<script lang="ts">
	import { createEventDispatcher } from 'svelte';
    import { onMount } from 'svelte';
    import { VirtualScrollDomain } from '@/domains/VirtualScrollDomain';

    type T = $$Generic;

    type VisibleElement = {
        el: T;
        index: number;
    }

    const dispatch = createEventDispatcher();

    const {
        defaultValues,
        getTotalContentHeight,
        getVisibleElementsLength,
        getElementsToAddCountPastMaxLength,
    } = VirtualScrollDomain

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

    $: currentRenderedRows = Math.floor(scrollTop / elementHeight)
    $: rowsToRenderAhead = Math.ceil(renderAhreadElementRowCount / elementsPerRow)

    $: firstInRowRenderedElementIndex = Math.max(
        0,
        currentRenderedRows - rowsToRenderAhead
    )

    $: lastInRowRenderedElementIndex = firstInRowRenderedElementIndex * elementsPerRow;

    $: canBeRenderedRows = Math.ceil(containerHeight / elementHeight)
    $: canBeRenderedElements = Math.ceil(canBeRenderedRows * elementsPerRow)
    $: tresholdElementsToRender = elementsPerRow * (renderAhreadElementRowCount + 1)

    $: elementCountIfAllElementsDontFitContainer = elementCount - (lastInRowRenderedElementIndex || 0)

    $: visibleNodeCount = Math.min(
        elementCountIfAllElementsDontFitContainer,
        canBeRenderedElements + tresholdElementsToRender
    );

    $: offsetY = lastInRowRenderedElementIndex * elementHeight / elementsPerRow

    let visibleElements: VisibleElement[]
    $: visibleElements = Array(getVisibleElementsLength(visibleNodeCount))
        .fill(null)
        .map((_, ind) => {
            const index = ind + lastInRowRenderedElementIndex

            return {
                el: data[index],
                index,
            }
        })

    const computeDataToAdd = (newRows: number = 0) => {
        let elementsToAddCount = newRows * elementsPerRow
        const dataLength = data.length

        if (dataLength + elementsToAddCount < visibleNodeCount) {
            elementsToAddCount += visibleNodeCount
        }

        if (dataLength + elementsToAddCount > elementCount) {
            elementsToAddCount = getElementsToAddCountPastMaxLength(elementCount, dataLength)
        }

        return dispatch('endReached', elementsToAddCount) 
    }

    let lastNeedToRenderCount = -1
    let lastRenderedCount = -1
    const tresholdLastRenderCount = 100

    const handleNewElementAppear = () => {
        const bufferHeight = elementHeight * renderAhreadElementRowCount

        const supposedToRenderZoneHeight = maxScrollTop + containerHeight + bufferHeight

        const needToRenderRowsCount = Math.ceil(supposedToRenderZoneHeight / elementHeight)
        const renderedRowsCount = Math.floor(data.length / elementsPerRow)

        if (renderedRowsCount < lastRenderedCount + tresholdLastRenderCount) {
            lastNeedToRenderCount = -1
            lastRenderedCount = -1
        }

        if (needToRenderRowsCount > renderedRowsCount && needToRenderRowsCount !== lastNeedToRenderCount) {
            const diffInRows = needToRenderRowsCount - renderedRowsCount

            lastNeedToRenderCount = needToRenderRowsCount

            computeDataToAdd(diffInRows)
        }

        lastRenderedCount = renderedRowsCount
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

    const handleReactiveElementsChange = <T>(..._: T[]) => {
        handleNewElementAppear()
    }

    $: handleReactiveElementsChange(elementsPerRow, elementHeight)

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
    }

    .virtual-scroll___element {
        display: block;
        box-sizing: border-box;
    }
</style>