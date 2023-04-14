import { PokemonListDomain } from "../domains/PokemonListDomain";
import { pokemonApi } from "../services/api/pokemonApi";

const  { initialListSettings }  = PokemonListDomain

const { offset, limit } = initialListSettings

export const useInitialPokemonList = () => {
    const { getList } = pokemonApi

    const getInitialList = () => {
        return getList(offset, limit)
    }

    return {
        getInitialList,
    }
}