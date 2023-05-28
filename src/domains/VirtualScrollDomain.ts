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

interface GetLastInRowRenderedElementIndexParams {
  scrollTop: number
  elementHeight: number
  renderAhreadElementRowCount: number
  elementsPerRow: number
}

interface GetVisibleNodeCountParams {
  containerHeight: number
  elementHeight: number
  elementsPerRow: number
  renderAhreadElementRowCount: number
  elementCount: number
  lastInRowRenderedElementIndex: number | undefined
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

const getLastInRowRenderedElementIndex = ({
  scrollTop,
  elementHeight,
  renderAhreadElementRowCount,
  elementsPerRow
}: GetLastInRowRenderedElementIndexParams): number => {
  const currentRenderedRows = Math.floor(scrollTop / elementHeight)
  const rowsToRenderAhead = Math.ceil(renderAhreadElementRowCount / elementsPerRow)

  const firstInRowRenderedElementIndex = Math.max(
    0,
    currentRenderedRows - rowsToRenderAhead
  )
  return firstInRowRenderedElementIndex * elementsPerRow
}

const getVisibleNodeCount = ({
  containerHeight,
  elementHeight,
  elementsPerRow,
  renderAhreadElementRowCount,
  elementCount,
  lastInRowRenderedElementIndex
}: GetVisibleNodeCountParams): number => {
  const canBeRenderedRows = Math.ceil(containerHeight / elementHeight)
  const canBeRenderedElements = Math.ceil(canBeRenderedRows * elementsPerRow)
  const tresholdElementsToRender = elementsPerRow * (renderAhreadElementRowCount + 1)

  const elementCountIfAllElementsDontFitContainer = elementCount - (lastInRowRenderedElementIndex ?? 0)

  return Math.min(
    elementCountIfAllElementsDontFitContainer,
    canBeRenderedElements + tresholdElementsToRender
  )
}

export const VirtualScrollDomain = {
  defaultValues,
  getTotalContentHeight,
  getVisibleElementsLength,
  getElementsToAddCountPastMaxLength,
  getLastInRowRenderedElementIndex,
  getVisibleNodeCount
}
