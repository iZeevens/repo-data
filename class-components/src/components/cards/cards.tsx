import './cards.scss'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

function Cards() {
  const navigate = useNavigate()
  const { data, isLoading, currentPage } = useSelector(
    (state: RootState) => state.search
  ) // Убрать code repeat
  const lastIndexElems = 5 * (currentPage + 1)
  const firstIndexElems = lastIndexElems - 5

  const elementsPagination = data?.comics.slice(firstIndexElems, lastIndexElems)

  const handleCardClick = (id: string) => {
    navigate(`/details?page=${currentPage + 1}&id=${id}`)
  }

  const handleCheckboxClick = (event: React.MouseEvent<HTMLInputElement>) => {
    event.stopPropagation()
  }

  return (
    <>
      <div className="cards-continer">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          elementsPagination &&
          elementsPagination.map((item, index) => {
            return (
              <div
                className="card-comics"
                key={index}
                onClick={() => handleCardClick(item.uid!)}
              >
                <span className="comics-title">{item.title}</span>
                <div className="comics-continer">
                  {item.publishedYear && (
                    <span>Published year: {item.publishedYear}</span>
                  )}
                  {item.publishedMonth && (
                    <span>Published month: {item.publishedMonth}</span>
                  )}
                  {item.publishedDay && (
                    <span>Published day: {item.publishedDay}</span>
                  )}
                </div>
                <div
                  className="checkbox-container"
                  onClick={handleCheckboxClick}
                >
                  <span>select: </span>
                  <input type="checkbox" id={item.uid} />
                </div>
              </div>
            )
          })
        )}
      </div>
    </>
  )
}

export default Cards
