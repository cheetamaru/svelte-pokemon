import { PokemonListDomain } from '@/domains/PokemonListDomain'
import { pokemonApi } from '@/services/api/pokemonApi'

const { initialListSettings } = PokemonListDomain

const { offset, limit } = initialListSettings

export const useInitialPokemonList = () => {
  const { getPokemonList } = pokemonApi

  const getInitialList = async () => {
    return await getPokemonList(offset, limit)
  }

  return {
    getInitialList
  }
}
