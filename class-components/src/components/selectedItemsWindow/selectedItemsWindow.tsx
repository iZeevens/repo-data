import './selectedItemsWindow.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

function SelectedItemsWindow() {
  const { cardsDetails } = useSelector(
    (state: RootState) => state.search
  )

  return (
    <div className="selected-items-window">
      <span className="selected-items-counter">{cardsDetails?.length} items are selected</span>
      <button className="selected-items-unselect btn">Unselect all</button>
      <button className="selected-items-download btn">Download</button>
    </div>
  )
}

export default SelectedItemsWindow
