<script lang="ts">
    import debounce from "lodash.debounce"
    import VirtualScroll from "@/components/virtualScroll/VirtualScroll.svelte";

    type GetterMethodType = (offset: number, limit: number) => Promise<any> | any

    export let data: any[] = []
    export let getterMethod: GetterMethodType = () => ({})

    $: ({ data, getterMethod, ...passThroughProps } = $$props)

    let elementPool = 0

    const getWithElPool = async () => {
        if (elementPool === 0) {
            return
        }

        const newData = getterMethod(data.length, elementPool)

        elementPool = 0

        data = [...data, ...(await newData).results]
    }

    const handleEndReached = (event: CustomEvent<number>) => {
        const newElsNeeded = event.detail

        elementPool += newElsNeeded

        getWithElPool()
    }

    const debouncedHandleEnd = debounce(handleEndReached, 100)
</script>


<VirtualScroll
    {data}
    {...passThroughProps}
    on:endReached={debouncedHandleEnd}
    let:el
    > 
        <slot {el} />
</VirtualScroll>