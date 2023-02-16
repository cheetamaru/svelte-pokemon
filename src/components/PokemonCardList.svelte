<script lang="ts">
    import PokemonCard from "../components/PokemonCard.svelte";
    export let list: import("pokenode-ts").NamedAPIResourceList
</script>
<div class="pokemon-card-list-container">
    <div class="pokemon-card-list">
        {#each list.results as pokemon}
            <PokemonCard name="{pokemon?.name}" />
        {/each}
    </div>
</div>


<style>
.pokemon-card-list-container {
    display: flex;
    justify-content: center;
}

.pokemon-card-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: left;;
}
</style>
