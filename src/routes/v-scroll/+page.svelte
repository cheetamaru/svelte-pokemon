<script lang="ts">
    const num = 100
    let index = 0
    const data = Array(num).fill(0).map((el) => el + index++)

    const rowHeight = 40
    const totalContentHeight = num * rowHeight

    const viewportHeight = 400;

    let scrollTop = 0

    const onScroll = (e: Event) => {
        return requestAnimationFrame(() => {
            if (e.target instanceof Element) {
                scrollTop = e.target.scrollTop
            }
        });
    }

    const renderAhread = 5

    $: startNode = Math.max(0, Math.floor(scrollTop / rowHeight) - renderAhread);

    let visibleNodeCount = Math.ceil(viewportHeight / rowHeight) + 2 * renderAhread;
    visibleNodeCount = Math.min(num - (startNode || 0), visibleNodeCount);

    $: offsetY = startNode * rowHeight

    $: visibleChildren = Array(visibleNodeCount || 0).fill(null).map((_, index) => {
        return data[index + startNode]
    })
</script>

<div>Virtual Scrolling</div>
<div class="main" style="height: {viewportHeight}px" on:scroll="{onScroll}">
    <div class="viewport" style="height: {totalContentHeight}px">
        <div class="container" style="transform: translateY({offsetY}px)">
            {#each visibleChildren as el}
                <div class="row">
                    {el}
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .main {
        overflow: auto;
        background-color: blanchedalmond;
    }

    .viewport {
        overflow: hidden;
        will-change: transform;
        position: relative;
    }

    .container {
        will-change: transform;
    }

    .row {
        display: block;
        box-sizing: border-box;
        height: 40px;
        width: 100px;
        border: 1px solid blueviolet;
    }
</style>