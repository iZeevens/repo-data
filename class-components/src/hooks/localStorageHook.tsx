import { useEffect, useState } from 'react'

function useLocalStorage(key: string, initValue: string = '') {
  const [state, setState] = useState(() => {
    if (typeof window !== 'undefined') {
      const localStorageSearch = localStorage.getItem(key)
      return localStorageSearch !== null
        ? JSON.parse(localStorageSearch)
        : initValue
    }
    return initValue
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(key, JSON.stringify(state))
      } catch (error) {
        console.error('Error writing to localStorage:', error)
      }
    }
  }, [key, state])

  return [state, setState] as const
}

export default useLocalStorage
