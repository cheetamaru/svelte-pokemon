import { PersistentStorageDomain } from "../domains/PersistentStorageDomain";
import { PokemonListDomain } from "../domains/PokemonListDomain";
import { getEventTargetValue } from "../utils";

type GetInitialValueParams = {
    min: number;
    max: number;
    defaultValue: number;
    numFromStorage?: number
}

export const usePokemonListInputs = () => {
    const {
        elementHeightSettings,
        elementsPerRowSettings,
        elementsPerRowStorageKey,
        elementsHeightStorageKey,
    } = PokemonListDomain

    const { setItem, getItem } = PersistentStorageDomain

    const getInitialValue = ({
        min,
        max,
        defaultValue,
        numFromStorage
    }: GetInitialValueParams) => {
        if (!numFromStorage || numFromStorage < min || numFromStorage > max) {
            return defaultValue;
        }

        return numFromStorage
    }

    const getInitialElementPerRow = () => {
        const { min, max, defaultValue } = elementsPerRowSettings;

        const numFromStorage = Number(getItem(elementsPerRowStorageKey))

        return getInitialValue({
            min,
            max,
            defaultValue,
            numFromStorage
        })
    }

    const getInitialElementHeight = () => {
        const { min, max, defaultValue } = elementHeightSettings;

        const numFromStorage = Number(getItem(elementsHeightStorageKey))

        return getInitialValue({
            min,
            max,
            defaultValue,
            numFromStorage
        })
    }

    const onElementPerRowInput = (e: Event) => {
        setItem(elementsPerRowStorageKey, getEventTargetValue(e))
    }

    const onElementHeightInput = (e: Event) => {
        setItem(elementsHeightStorageKey, getEventTargetValue(e))
    }

    return {
        getInitialElementPerRow,
        getInitialElementHeight,
        onElementPerRowInput,
        onElementHeightInput,
    }
}