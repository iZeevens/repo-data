import './styles/index.scss'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './lib/store'
import SearchPage from './pages/searchPage/searchPage'
import NotFound from './pages/404/404'
import DetailsCard from './components/detailsCard/detailsCard'
import useTheme from './hooks/useTheme'

// Главный компонент внутри которого будут распологаться остальные компоненты

function App() {
  const [theme] = useTheme()

  return (
    <Provider store={store}>
      <div className={`App ${theme}`}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<SearchPage />}>
              <Route path="/details" element={<DetailsCard />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </div>
    </Provider>
  )
}

export default App
