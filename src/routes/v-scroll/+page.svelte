<script lang="ts">
    const elementCount = 100
    const elementHeight = 30
    const containerHeight = 400;
    const renderAhreadElementCount = 5

    const totalContentHeight = elementCount * elementHeight

    let index = 0
    const data = Array(elementCount).fill(0).map((el) => el + index++)

    let scrollTop = 0

    const onScroll = (e: Event) => {
        return requestAnimationFrame(() => {
            if (e.target instanceof Element) {
                scrollTop = e.target.scrollTop
            }
        });
    }

    $: firstRenderedElementIndex = Math.max(0, Math.floor(scrollTop / elementHeight) - renderAhreadElementCount);

    let visibleNodeCount = Math.ceil(containerHeight / elementHeight) + 2 * renderAhreadElementCount;
    visibleNodeCount = Math.min(elementCount - (firstRenderedElementIndex || 0), visibleNodeCount);

    $: offsetY = firstRenderedElementIndex * elementHeight

    $: visibleElements = Array(visibleNodeCount || 0).fill(null).map((_, index) => {
        return data[index + firstRenderedElementIndex]
    })
</script>

<div>Virtual Scrolling</div>
<div class="virtual-scroll__container" style="height: {containerHeight}px" on:scroll="{onScroll}">
    <div class="virtual-scroll__viewport" style="height: {totalContentHeight}px">
        <div class="virtual-scroll___visible-part" style="transform: translateY({offsetY}px)">
            {#each visibleElements as el}
                <div class="virtual-scroll___element" style="height: {elementHeight}px">
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
    }

    .virtual-scroll___element {
        display: block;
        box-sizing: border-box;
        width: 100px;
        border: 1px solid blueviolet;
    }
</style>