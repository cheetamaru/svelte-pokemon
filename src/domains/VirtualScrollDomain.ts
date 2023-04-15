const defaultValues = {
    elementCount: 100,
    elementHeight: 150,
    containerHeight: 700,
    renderAhreadElementRowCount: 4,
    elementsPerRow: 6,
}

const getTotalContentHeight = ({
    elementCount,
    elementsPerRow,
    elementHeight
}: {
    elementCount: number;
    elementsPerRow: number;
    elementHeight: number;
}) => {
    return Math.ceil(elementCount / elementsPerRow) * elementHeight
}

export const VirtualScrollDomain = {
    defaultValues,
    getTotalContentHeight
}