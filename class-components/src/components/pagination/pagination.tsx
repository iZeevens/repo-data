import './pagination.scss'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

function Pagination() {
  const navigate = useNavigate()
  const { data, currentPage } = useSelector((state: RootState) => state.search)
  const elements = data?.comics

  if (!elements) return

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
