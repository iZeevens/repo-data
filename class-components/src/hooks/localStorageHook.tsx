import { useEffect, useState } from 'react'

function useLocalStorage(key: string, initValue: string = '') {
  const [state, setState] = useState(() => {
    const localStorageSearch = localStorage.getItem(key)
    return localStorageSearch !== null
      ? JSON.parse(localStorageSearch)
      : initValue
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state))
    } catch (error) {
      console.error('Error writing to localStorage:', error)
    }
  }, [key, state])

  return [state, setState]
}

export default useLocalStorage
