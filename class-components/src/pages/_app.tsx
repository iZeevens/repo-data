import '../styles/index.scss'
import StoreProvider from '../app/StoreProvider'
import useTheme from '../hooks/useTheme'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const [theme] = useTheme()

  return (
    <StoreProvider>
      <div className={`App ${theme}`}>
        <Component {...pageProps} />
      </div>
    </StoreProvider>
  )
}

export default MyApp
