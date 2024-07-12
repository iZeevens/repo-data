interface Comics {
  title: string
  publishedYear?: number
  publishedMonth?: number
  publishedDay?: number
  numberOfPages?: number
  photonovel?: boolean
  adaptation?: boolean
}

interface SearchProps {
  setData: (data: Comics[]) => void
  setIsLoading: (loading: boolean) => void
}

export type { Comics, SearchProps }
