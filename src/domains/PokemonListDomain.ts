const initialListSettings = {
    offset: 0,
    limit: 30,
}

const elementsPerRowSettings = {
    min: 1,
    max: 10,
    defaultValue: 4
}

const elementHeightSettings = {
    min: 150,
    max: 300,
    step: 10,
    defaultValue: 150
}

const getValueInRange = ({val, min, max}: {val: number, min: number, max: number}) => {
    if (val < min) {
        return min;
    }

    if (val > max) {
        return max
    }

    return val
}

const elementsPerRowStorageKey = "elementsPerRow"
const elementsHeightStorageKey = "elementHeight"

export const PokemonListDomain = {
    initialListSettings,
    elementsPerRowSettings,
    elementHeightSettings,
    elementsPerRowStorageKey,
    elementsHeightStorageKey,
    getValueInRange,
}
