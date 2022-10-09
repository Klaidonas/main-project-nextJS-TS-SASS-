import '../styles/Layout.scss'
import '../styles/Footer.scss'
import '../styles/Header.scss'
import '../styles/Landing.scss'
import '../styles/style.scss'
import '../styles/buttons.scss'
import '../styles/SearchBar.scss'
import '../styles/Modal.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
