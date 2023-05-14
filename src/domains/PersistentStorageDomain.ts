const setItem = (key: string, value: string) => {
  localStorage.setItem(key, value)
}

const getItem = (key: string): string | null => {
  return localStorage.getItem(key)
}

export const PersistentStorageDomain = {
  setItem,
  getItem
}
