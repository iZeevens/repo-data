'use client'

import './pagination.scss'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { setPage } from '../../lib/reducers/searchSlice'
import useTheme from '../../hooks/useTheme'
import { RootState } from '../../lib/store'

function Pagination() {
  const dispatch = useDispatch()
  const router = useRouter()
  const { data, currentPage } = useSelector((state: RootState) => state.search)
  const [theme] = useTheme()

  const elements = data?.comics
  if (!elements) return

  const elementsPerPage = Math.ceil(elements.length / 5)

  const handlePagination = (page: number) => {
    dispatch(setPage(page))
    router.push(`/?page=${page + 1}`)
  }

  console.log(currentPage)

  return (
    <div className="pagination">
      {Array.from({ length: elementsPerPage }, (_, indexPage) => (
        <span
          key={indexPage}
          className={`pagination-item pagination-item-${theme} ${indexPage === currentPage ? 'active-page' : ''}`}
          onClick={() => handlePagination(indexPage)}
        >
          {indexPage + 1}
        </span>
      ))}
    </div>
  )
}

export default Pagination
