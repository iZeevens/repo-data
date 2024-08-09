import '../styles/index.scss'
import StoreProvider from './StoreProvider'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <div className={`App`}>
        <Component {...pageProps} />
      </div>
    </StoreProvider>
  )
}

export default MyApp
