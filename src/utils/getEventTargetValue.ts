export const getEventTargetValue = (e: Event) => {
    return (e.target as HTMLInputElement)?.value
}
