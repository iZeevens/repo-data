// import { screen, waitFor } from '@testing-library/dom'
import renderCustomStoreProvider from '../../utils/customStore'
import SelectedItemsWindow from './selectedItemsWindow'
import { detailsCardsData } from '../../__mocks__/data'
// import userEvent from '@testing-library/user-event'


describe('Selected Items Window Tests', () => {
  URL.createObjectURL = vi.fn()
  
  it('Selected Items Window render', () => {
    renderCustomStoreProvider(<SelectedItemsWindow />, {
      preloadedState: {
        search: {
          isLoading: false,
          currentPage: 1,
          cardsDetails: detailsCardsData,
        },
      },
    })
  })
})
