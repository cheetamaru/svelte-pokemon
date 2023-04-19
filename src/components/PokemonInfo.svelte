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
    {#if src}
        <img class="pokemon-info__img" {src} {alt}/>
    {:else}
        <div class="pokemon-info__not-found">
            <img class="pokemon-info__not-found-img" src="/substitute_sprite.png" {alt}/>
            <div class="pokemon-info__not-found-subtitle">Image not found</div>
        </div>
    {/if}
</div>

<style>
    .pokemon-info {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .pokemon-info__title {
        text-align: center;
    }

    .pokemon-info__img {
        max-height: 100px;
    }

    .pokemon-info__not-found {
        height: 96px;
        text-align: center;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }

    .pokemon-info__not-found-img {
        height: 60%;
    }

    .pokemon-info__not-found-subtitle {
        font-weight: 100;
        font-size: small;
        color: gray;
    }
</style>