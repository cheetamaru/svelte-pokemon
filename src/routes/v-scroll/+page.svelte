<script lang="ts">
    const elementCount = 100
    const elementHeight = 30
    const containerHeight = 200;
    const renderAhreadElementRowCount = 5

    const elementsPerRow = 3

    const totalContentHeight = Math.ceil(elementCount / elementsPerRow) * elementHeight

    const firstBatch = Math.ceil(Math.ceil(containerHeight / elementHeight) * elementsPerRow) + 2 * renderAhreadElementRowCount 

    let index = 1
    let data = Array(firstBatch).fill(0).map((el) => el + index++)

    let scrollTop = 0
    let maxScrollTop = scrollTop

    let needToRenderRows = 0

    const computeDataToAdd = () => {
        let dataToAdd  = Array(elementsPerRow * renderAhreadElementRowCount).fill(0).map(el => el + index++)

        if (data.length + dataToAdd.length > elementCount) {
            dataToAdd = dataToAdd.slice(0, elementCount - data.length)
        }

        return dataToAdd
    }

    const onNewElementAppear = () => {
        const newVal = Math.ceil((maxScrollTop / elementHeight) / renderAhreadElementRowCount)

        if (newVal > needToRenderRows) {
            needToRenderRows = newVal

            const dataToAdd = computeDataToAdd()

            data = [...data, ...dataToAdd]
        }
    }

    const onScroll = (e: Event) => {
        return requestAnimationFrame(() => {
            if (e.target instanceof Element) {
                scrollTop = e.target.scrollTop

                if (e.target.scrollTop > maxScrollTop) {
                    maxScrollTop = e.target.scrollTop
                    onNewElementAppear()
                }
            }
        });
    }

    $: lastInRowRenderedElementIndex = Math.max(0, Math.floor(scrollTop / elementHeight) - Math.ceil(renderAhreadElementRowCount / elementsPerRow)) * elementsPerRow;

    $: visibleNodeCount = Math.min(
        elementCount - (lastInRowRenderedElementIndex || 0),
        Math.ceil(Math.ceil(containerHeight / elementHeight) * elementsPerRow) + elementsPerRow * renderAhreadElementRowCount
    );

    $: offsetY = lastInRowRenderedElementIndex * elementHeight / elementsPerRow

    $: visibleElements = Array(visibleNodeCount || 0)
        .fill(null)
        .map((_, index) => {
            return data[index + lastInRowRenderedElementIndex]
        })
</script>

<div>Virtual Scrolling</div>
<div>visibleNodeCount: {visibleNodeCount}</div>
<div>data: {data.length}</div>
<div>maxScrollTop: {maxScrollTop}</div>
<div class="virtual-scroll__container" style="height: {containerHeight}px" on:scroll="{onScroll}">
    <div class="virtual-scroll__viewport" style="height: {totalContentHeight}px">
        <div class="virtual-scroll___visible-part" style="transform: translateY({offsetY}px)">
            {#each visibleElements as el}
                <div
                    class="virtual-scroll___element"
                    style="
                        height: {elementHeight}px;
                        width: {100 / elementsPerRow}%
                    "
                >
                    {el}
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .virtual-scroll__container {
        overflow: auto;
        background-color: blanchedalmond;
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