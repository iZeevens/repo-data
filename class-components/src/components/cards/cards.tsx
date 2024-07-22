import './cards.scss'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  setCardDetails,
  removeCardDetails,
} from '../../redux/reducers/searchSlice'
import { useGetComicsByUidMutation } from '../../services/apiSlice'
import { RootState } from '../../redux/store'

function Cards() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { data, isLoading, currentPage, cardsDetails } = useSelector(
    (state: RootState) => state.search
  )
  const [searchByUid] = useGetComicsByUidMutation()

  const lastIndexElems = 5 * (currentPage + 1)
  const firstIndexElems = lastIndexElems - 5

  const elementsPagination = data?.comics.slice(firstIndexElems, lastIndexElems)

  const handleCardClick = (id: string) => {
    navigate(`/details?page=${currentPage + 1}&id=${id}`)
  }

  const handleCheckboxClick = async (
    event: React.MouseEvent<HTMLInputElement>
  ) => {
    event.stopPropagation()
    const target = event.target as HTMLInputElement
    const targetUid = target.id

    if (target.checked) {
      if (targetUid) {
        const comicsData = await searchByUid(targetUid)
        dispatch(setCardDetails([comicsData]))
        console.log(comicsData)
      }
    } else {
      console.log(cardsDetails)
      dispatch(
        removeCardDetails(
          cardsDetails?.filter((item) => {
            return item.data.comics.uid !== targetUid
          })
        )
      )
    }
  }

  return (
    <>
      <div className="cards-continer">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          elementsPagination &&
          elementsPagination.map((item) => {
            const isChecked = cardsDetails?.some((card) => card.data.comics.uid === item.uid) || false;

            return (
              <div
                className="card-comics"
                key={item.uid}
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
                  <input type="checkbox" id={item.uid} defaultChecked={isChecked} />
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
