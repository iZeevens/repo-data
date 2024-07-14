import { renderHook } from '@testing-library/react'

import useLocalStorage from './localStorageHook'

const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
}
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
})

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorageMock.getItem.mockClear()
    localStorageMock.setItem.mockClear()
  })

  it('should initialize with value from localStorage', () => {
    localStorageMock.getItem.mockReturnValueOnce(JSON.stringify('storedValue'))

    const { result } = renderHook(() =>
      useLocalStorage('testKey', 'initialValue')
    )

    expect(result.current[0]).toBe('storedValue')
    expect(localStorageMock.getItem).toHaveBeenCalledWith('testKey')
  })
})
