import { PokemonClient } from 'pokenode-ts';

const api = new PokemonClient();

const getPokemonByName = (name: string) => {
    return api.getPokemonByName(name)
}

const getList = (offset?: number, limit?: number) => {
    return api.listPokemons(offset, limit)
}

export const pokemonApi = {
    getPokemonByName,
    getList,
}
