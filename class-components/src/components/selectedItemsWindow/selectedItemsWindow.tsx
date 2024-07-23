import './selectedItemsWindow.scss'
import { useSelector, useDispatch } from 'react-redux'
import { removeCardDetails } from '../../redux/reducers/searchSlice'
import { RootState } from '../../redux/store'

function SelectedItemsWindow() {
  const { cardsDetails } = useSelector((state: RootState) => state.search)
  const dispatch = useDispatch()

  const unSelectHandler = () => {
    dispatch(removeCardDetails([]))
  }

  const onDowlandHandler = () => {
    console.log(cardsDetails)
  }

  return (
    <div className="selected-items-window">
      <span className="selected-items-counter">
        {cardsDetails?.length} items are selected
      </span>
      <button className="selected-items-unselect btn" onClick={unSelectHandler}>
        Unselect all
      </button>
      <button
        className="selected-items-download btn"
        onClick={onDowlandHandler}
      >
        Download
      </button>
    </div>
  )
}

export default SelectedItemsWindow
