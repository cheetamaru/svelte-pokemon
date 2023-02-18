<script lang="ts">
    const num = 100
    let index = 0
    const data = Array(num).fill(0).map((el) => el + index++)

    const rowHeight = 40
    const totalContentHeight = num * rowHeight

    const viewportHeight = 400;
    const offsetY = 0 + rowHeight

</script>

<div class="main" style="height: {viewportHeight}px">
    <div class="viewport" style="height: {totalContentHeight}px">
        <div class="container" style="transform: translateY(${offsetY}px)">
            {#each data as el}
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
        height: 40px;
        width: 100px;
        border: 1px solid blueviolet;
    }
</style>