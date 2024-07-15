import './cards.scss'
import { CardsProps } from '../../interfaces/cardsTypes/cardsTypes'
import { useNavigate } from 'react-router-dom'

function Cards({ isLoading, elements, currentPage }: CardsProps) {
  const navigate = useNavigate()
  const lastIndexElems = 5 * (currentPage + 1)
  const firstIndexElems = lastIndexElems - 5

  const elementsPagination = elements.slice(firstIndexElems, lastIndexElems)

  const handleCardClick = (id: string) => {
    navigate(`/details?page=${currentPage + 1}&id=${id}`)
  }

  return (
    <>
      <div className="cards-continer">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
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
              </div>
            )
          })
        )}
      </div>
    </>
  )
}

export default Cards
