'use client'

import './pagination.scss'
import { useRouter } from 'next/navigation'
import { Comics } from '../../interfaces/searchTypes/searchTypes'

interface PaginationProps {
  data: Comics
  currentPage: string
  search: string
}

function Pagination({ data, currentPage, search }: PaginationProps) {
  const router = useRouter()

  const elements = data?.comics
  if (!elements) return

  const elementsPerPage = Math.ceil(elements.length / 5)

  const handlePagination = (page: number) => {
    router.push(`/?page=${page}&search=${search}`)
  }

  return (
    <div className="pagination">
      {Array.from({ length: elementsPerPage }, (_, indexPage) => (
        <span
          key={indexPage}
          className={`pagination-item pagination-item ${indexPage + 1 === Number(currentPage) ? 'active-page' : ''}`}
          onClick={() => handlePagination(indexPage + 1)}
        >
          {indexPage + 1}
        </span>
      ))}
    </div>
  )
}

export default Pagination
