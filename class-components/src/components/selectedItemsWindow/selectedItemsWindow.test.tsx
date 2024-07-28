import renderCustomStoreProvider from '../../utils/customStore'
import SelectedItemsWindow from './selectedItemsWindow'
import { detailsCardsData } from '../../__mocks__/data'

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
