import './cards.scss'
import { CardsProps } from '../../interfaces/cards/cardsTypes'
import Pagination from '../pagination/pagination'

function Cards({ isLoading, elements }: CardsProps) {
  return (
    <>
      <div className="cards-continer">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          elements.map((item, index) => {
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
      <Pagination elements={elements} />
    </>
  )
}

export default Cards
