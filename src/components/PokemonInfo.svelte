<script lang="ts">
    import type { Pokemon } from "pokenode-ts";
    import { PokemonInfoDomain } from "../domains/PokemonInfoDomain";

    export let pokemon: Pokemon

    const {
        getImgAlt,
        getImgSrc,
        getInfoTitle,
        notFoundMessage,
    } = PokemonInfoDomain;

    $: infoTitle = getInfoTitle(pokemon)

    $: src = getImgSrc(pokemon)
    $: alt = getImgAlt(pokemon)
</script>

<div class="pokemon-info">
    <div class="pokemon-info__title" title={infoTitle}>{infoTitle}</div>    
    {#if src}
        <img class="pokemon-info__img" {src} {alt}/>
    {:else}
        <div class="pokemon-info__not-found">
            <img class="pokemon-info__not-found-img" src="/substitute_sprite.png" {alt}/>
            <div class="pokemon-info__not-found-subtitle">{notFoundMessage}</div>
        </div>
    {/if}
</div>

<style>
    .pokemon-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .pokemon-info__title {
        width: 90%;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
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