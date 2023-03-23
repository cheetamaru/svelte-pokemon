<script lang="ts">
    import VirtualScroll from "../../components/VirtualScroll.svelte";


let index = 1
let data: object[] = Array(20).fill(null).map(el => el + index++)

const handleEndReached = (event: CustomEvent<number>) => {
    const dataToAdd = Array(event.detail).fill(0).map(el => el + index++)

    data = [...data, ...dataToAdd]
}
</script>

<div>
    <div>Component!</div>
    <VirtualScroll {data} on:endReached={handleEndReached} let:el>
        {el}
    </VirtualScroll>
</div>
