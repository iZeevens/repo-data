import { useEffect, useState } from 'react'

function useLocalStorage(key: string, initValue: string) {
  const [state, setState] = useState(() => {
    const localStorageSearch = localStorage.getItem(key)
    return localStorageSearch !== null
      ? JSON.parse(localStorageSearch)
      : initValue
  })

  const setupLocalStorage = (key: string, state: string) =>
    localStorage.setItem(key, JSON.stringify(state))

  useEffect(() => {
    try {
      setupLocalStorage(key, state)

      return () => {
        setupLocalStorage(key, state)
      }
    } catch (error) {
      console.error('Error writing to localStorage:', error)
    }
  }, [key, state])

  return [state, setState] as const
}

export default useLocalStorage
