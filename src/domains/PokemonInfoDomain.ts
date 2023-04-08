import type { Pokemon } from "pokenode-ts";
import { capitalize } from "../utils";

const getImgAlt = (pokemon: Pokemon) => {
    return `${pokemon.name} sprite`
}

const getImgSrc = (pokemon: Pokemon) => {
    return pokemon.sprites.front_default
}

const getInfoTitle = (pokemon: Pokemon) => {
    const capitalizedName = capitalize(pokemon.name)

    return `${capitalizedName} (${pokemon.id})`
}

export const PokemonInfoDomain = {
    getImgAlt,
    getImgSrc,
    getInfoTitle,
}