<script lang="ts">
    import type { Pokemon } from "pokenode-ts";

    export let pokemon: Pokemon

    $: name = pokemon.name
    $: capitalizedName = name[0].toUpperCase() + name.slice(1)
    $: spriteSrc = pokemon.sprites.front_default
</script>

<div class="pokemon-info">
    <div class="pokemon-info__name">{capitalizedName}</div>
    <img src="{spriteSrc}" alt="{name} sprite"/>
</div>

<style>
    .pokemon-info__name {
        text-align: center;
    }
</style>