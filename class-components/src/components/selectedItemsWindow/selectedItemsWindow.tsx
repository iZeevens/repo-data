import './selectedItemsWindow.scss'

function SelectedItemsWindow() {
  return (
    <div className="selected-items-window">
      <span className='selected-items-counter'>3 items are selected</span>
      <button className='selected-items-unselect btn'>Unselect all</button>
      <button className='selected-items-download btn'>Download</button>
    </div>
  )
}

export default SelectedItemsWindow
