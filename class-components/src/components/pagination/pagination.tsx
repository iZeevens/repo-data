import './pagination.scss'
import { PaginationType } from '../../interfaces/paginationTypes/paginationTypes'
import { Link } from 'react-router-dom'

function Pagination({ elements, page, setPage }: PaginationType) {
  const elementsPerPage = Math.ceil(elements.length / 5)

  const handlePagination = (e: React.MouseEvent<HTMLSpanElement>) => {
    const target = e.target as HTMLSpanElement

    if (target.textContent) setPage(Number(target.textContent) - 1)
  }

  return (
    <div className="pagination">
      {Array.from({ length: elementsPerPage }, (_, indexPage) => (
        <Link key={indexPage} className="page-link" to={`/${indexPage + 1}`}>
          <span
            className={`pagination-item ${indexPage === page ? 'active-page' : ''}`}
            onClick={handlePagination}
          >
            {indexPage + 1}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Pagination
