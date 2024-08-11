interface ComicsData {
  title: string
  publishedYear: number
  publishedMonth: number
  publishedDay: number
  numberOfPages: number
  photonovel: boolean
  adaptation: boolean
  uid: string
}

type Comics = { comics: ComicsData[] | null }

interface SearchProps {
  setData: (data: Comics[]) => void
  setIsLoading: (loading: boolean) => void
}

export type { Comics, ComicsData, SearchProps }
