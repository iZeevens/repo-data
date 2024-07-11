import './pagination.scss'
import { PaginationType } from '../../interfaces/paginationTypes/paginationTypes'

function Pagination({ elements, page, setPage }: PaginationType) {
  const elementsPerPage = Math.ceil(elements.length / 5)

  const handlePagination = (e: React.MouseEvent<HTMLSpanElement>) => {
    const target = e.target as HTMLSpanElement

    if (target.textContent) setPage(Number(target.textContent) - 1)
  }

  return (
    <div className="pagination">
      {Array.from({ length: elementsPerPage }, (_, index) => (
        <span
          key={index}
          className={`pagination-item ${index === page ? 'active-page' : ''}`}
          onClick={handlePagination}
        >
          {index + 1}
        </span>
      ))}
    </div>
  )
}

export default Pagination
