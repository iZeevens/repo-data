import './selectedItemsWindow.scss'
import { useSelector, useDispatch } from 'react-redux'
import { removeCardDetails } from '../../redux/reducers/searchSlice'
import { RootState } from '../../redux/store'
import { CardDetailsData } from '../../interfaces/cardsTypes/cardsTypes'

function SelectedItemsWindow() {
  const { cardsDetails } = useSelector((state: RootState) => state.search)
  const dispatch = useDispatch()


  const unSelectHandler = () => {
    dispatch(removeCardDetails([]))
  }

  const convertToCSV = (obj: CardDetailsData[]) => {
    if (obj.length === 0) return ''

    let csvContent = ''
    let titleKeys = null
    const result = []

    titleKeys = Object.keys(obj[0])
    result.push(titleKeys)

    obj.forEach((item) => {
      result.push(Object.values(item))
    })

    result.forEach((row) => {
      console.log(row)
      csvContent += row?.join(';') + '\n'
    })

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' })
    return URL.createObjectURL(blob)
  }

  return (
    <>
      {cardsDetails && cardsDetails.length > 0 ? (
        <div className="selected-items-window">
          <span className="selected-items-counter">
            {cardsDetails?.length} items are selected
          </span>
          <button
            className="selected-items-unselect btn"
            onClick={unSelectHandler}
          >
            Unselect all
          </button>
          <button className="selected-items-download btn">
            <a
              href={convertToCSV(cardsDetails)}
              download={`comics_${cardsDetails.length}.csv`}
            >
              Download
            </a>
          </button>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default SelectedItemsWindow
