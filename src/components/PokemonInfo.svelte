<script lang="ts">
    import type { Pokemon } from "pokenode-ts";
    import { capitalize } from "../utils";

    export let pokemon: Pokemon

    $: name = pokemon.name
    $: capitalizedName = capitalize(name)

    $: spriteSrc = pokemon.sprites.front_default
</script>

<div class="pokemon-info">
    <div class="pokemon-info__name">{capitalizedName} ({pokemon.id})</div>
    <img class="pokemon-info__img" src="{spriteSrc}" alt="{name} sprite"/>
</div>

<style>
    .pokemon-info {
        height: 150px;
    }

    .pokemon-info__name {
        text-align: center;
    }

    .pokemon-info__img {
        height: 100px;
    }
</style>