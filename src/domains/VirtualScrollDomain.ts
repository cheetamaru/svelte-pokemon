const defaultValues = {
  elementCount: 100,
  elementHeight: 150,
  containerHeight: 700,
  renderAhreadElementRowCount: 4,
  elementsPerRow: 6
}

interface GetTotalContentHeightParams {
  elementCount: number
  elementsPerRow: number
  elementHeight: number
}

const getTotalContentHeight = ({
  elementCount,
  elementsPerRow,
  elementHeight
}: GetTotalContentHeightParams): number => {
  return Math.ceil(elementCount / elementsPerRow) * elementHeight
}

const getVisibleElementsLength = (visibleNodeCount: number) => {
  return visibleNodeCount < 0 ? 0 : visibleNodeCount
}

const getElementsToAddCountPastMaxLength = (elementCount: number, dataLength: number) => {
  const diff = elementCount - dataLength

  return diff > 0 ? diff : 0
}

export const VirtualScrollDomain = {
  defaultValues,
  getTotalContentHeight,
  getVisibleElementsLength,
  getElementsToAddCountPastMaxLength
}
