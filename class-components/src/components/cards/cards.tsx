import './cards.scss'
import { CardsProps } from '../../interfaces/cardsTypes/cardsTypes'
import Pagination from '../pagination/pagination'

function Cards({ isLoading, elements, currentPage }: CardsProps) {
  const lastIndexElems = 5 * (currentPage + 1)
  const firstIndexElems = lastIndexElems - 5

  const elementsPagination = elements.slice(firstIndexElems, lastIndexElems)

  return (
    <>
      <div className="cards-continer">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          elementsPagination.map((item, index) => {
            return (
              <div className="card-comics" key={index}>
                <span className="comics-title">{item.title}</span>
                <div className="comics-continer">
                  {item.publishedYear ? <span>{item.publishedYear}</span> : ''}
                  {item.publishedMonth ? (
                    <span>{item.publishedMonth}</span>
                  ) : (
                    ''
                  )}
                  {item.publishedDay ? <span>{item.publishedDay}</span> : ''}
                </div>
              </div>
            )
          })
        )}
      </div>
      <Pagination elements={elements} currentPage={currentPage} />
    </>
  )
}

export default Cards
