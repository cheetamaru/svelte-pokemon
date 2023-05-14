import { PokemonClient } from 'pokenode-ts'

const api = new PokemonClient()

const getPokemonByName = async (name: string) => {
  return await api.getPokemonByName(name)
}

const getPokemonList = async (offset?: number, limit?: number) => {
  return await api.listPokemons(offset, limit)
}

export const pokemonApi = {
  getPokemonByName,
  getPokemonList
}
