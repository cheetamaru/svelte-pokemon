const defaultValues = {
    elementCount: 100,
    elementHeight: 150,
    containerHeight: 700,
    renderAhreadElementRowCount: 4,
    elementsPerRow: 6,
}

type GetTotalContentHeightParams = {
    elementCount: number;
    elementsPerRow: number;
    elementHeight: number;
}

const getTotalContentHeight = ({
    elementCount,
    elementsPerRow,
    elementHeight
}: GetTotalContentHeightParams): number => {
    return Math.ceil(elementCount / elementsPerRow) * elementHeight
}

export const VirtualScrollDomain = {
    defaultValues,
    getTotalContentHeight
}