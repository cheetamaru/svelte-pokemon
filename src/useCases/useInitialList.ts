import { pokemonApi } from "../services/api/pokemonApi";

export const useInitialList = () => {
    const { getList } = pokemonApi;

    const offset = 0
    const limit = 30

    const getInitialList = () => {
        return getList(offset, limit)
    }


    return {
        getInitialList,
    }
}