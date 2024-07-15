import './pagination.scss'
import { PaginationType } from '../../interfaces/paginationTypes/paginationTypes'
import { useNavigate } from 'react-router-dom'

function Pagination({ elements, currentPage }: PaginationType) {
  const navigate = useNavigate()
  const elementsPerPage = Math.ceil(elements.length / 5)

  const handlePagination = (page: number) => {
    navigate(`/?page=${page + 1}`)
  }

  return (
    <div className="pagination">
      {Array.from({ length: elementsPerPage }, (_, indexPage) => (
        <span
          key={indexPage}
          className={`pagination-item ${indexPage === currentPage ? 'active-page' : ''}`}
          onClick={() => handlePagination(indexPage)}
        >
          {indexPage + 1}
        </span>
      ))}
    </div>
  )
}

export default Pagination
