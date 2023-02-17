<script lang="ts">
    import type { NamedAPIResourceList } from "pokenode-ts";
    import PokemonCard from "../components/PokemonCard.svelte";

    export let list: NamedAPIResourceList

    $: total = list.count
</script>

<div>Total: {total}</div>
<div class="pokemon-card-list">
    <div class="pokemon-card-list__main">
        {#each list.results as pokemon}
            <PokemonCard name="{pokemon?.name}" />
        {/each}
    </div>
</div>


<style>
.pokemon-card-list {
    display: flex;
    justify-content: center;
}

.pokemon-card-list__main {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: left;;
}
</style>
