import './pagination.scss'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useTheme from '../../hooks/useTheme'
import { RootState } from '../../app/store'

function Pagination() {
  const navigate = useNavigate()
  const { data, currentPage } = useSelector((state: RootState) => state.search)
  const [theme] = useTheme()

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
