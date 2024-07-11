import { useEffect, useState } from 'react'

function useLocalStorage(key: string, initValue: string) {
  const [state, setState] = useState(() => {
    try {
      const localStorageSearch = localStorage.getItem(key)
      return localStorageSearch !== null
        ? JSON.parse(localStorageSearch)
        : initValue
    } catch (error) {
      console.error('Error reading localStorage:', error)
      return initValue
    }
  })

  useEffect(() => {
    try {
      return () => localStorage.setItem(key, JSON.stringify(state))
    } catch (error) {
      console.error('Error writing to localStorage:', error)
    }
  }, [key, state])

  return [state, setState] as const
}

export default useLocalStorage
