import '../styles/index.scss'
import StoreProvider from '../app/StoreProvider'
import SearchPage from '.'
import useTheme from '../hooks/useTheme'

function App() {
  const [theme] = useTheme()

  return (
    <StoreProvider>
      <div className={`App ${theme}`}>
        <SearchPage />
      </div>
    </StoreProvider>
  )
}

export default App
