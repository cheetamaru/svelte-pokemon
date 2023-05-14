import type { Pokemon } from 'pokenode-ts'
import { capitalize } from '@/utils'

const notFoundMessage = 'Image not found'

const getImgAlt = (pokemon: Pokemon): string => {
  return `${pokemon.name} sprite`
}

const getImgSrc = (pokemon: Pokemon): string | null => {
  return pokemon.sprites.front_default
}

const getInfoTitle = (pokemon: Pokemon): string => {
  const capitalizedName = capitalize(pokemon.name)

  return `${capitalizedName} (${pokemon.id})`
}

export const PokemonInfoDomain = {
  getImgAlt,
  getImgSrc,
  getInfoTitle,
  notFoundMessage
}
