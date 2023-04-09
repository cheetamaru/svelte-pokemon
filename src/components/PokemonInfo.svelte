<script lang="ts">
    import type { Pokemon } from "pokenode-ts";
    import { PokemonInfoDomain } from "../domains/PokemonInfoDomain";

    export let pokemon: Pokemon

    const {
        getImgAlt,
        getImgSrc,
        getInfoTitle,
    } = PokemonInfoDomain;

    $: infoTitle = getInfoTitle(pokemon)

    $: src = getImgSrc(pokemon)
    $: alt = getImgAlt(pokemon)
</script>

<div class="pokemon-info">
    <div class="pokemon-info__title">{infoTitle}</div>
    <img class="pokemon-info__img" {src} {alt}/>
</div>

<style>
    .pokemon-info {
        height: inherit;
    }

    .pokemon-info__title {
        text-align: center;
    }

    .pokemon-info__img {
        height: 80%;
    }
</style>